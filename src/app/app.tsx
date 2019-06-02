import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './app.module.css';
import { Header } from './header/header';
import { Main } from './main/main';
import { LetterType } from './types/types';
import {
  generateAuthorNameWithAbbr,
  generateDate,
  generateRandomInt,
  generateText
} from './main/scripts/lettterGeneratorUtils';

interface IState {
  searchText: string;
  isDark: boolean;
  letters: LetterType[];
  filteredLetters: LetterType[];
  isAllChecked: boolean;
  checkedLetterIds: { [id: string]: boolean };
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const MAX_LETTERS = 10;

export class App extends Component {
  private last: number = 300000;

  public constructor(props: {}) {
    super(props);
    this.state = {
      searchText: '',
      isDark: false,
      letters: [],
      filteredLetters: [],
      isAllChecked: false,
      checkedLetterIds: {}
    };
    this.searchFunction.bind(this);
    this.switchTheme.bind(this);
    this.newMail.bind(this);
    this.selectAll.bind(this);
    this.onCheckboxChange.bind(this);
    this.deleteLetters.bind(this);
    this.removeAddAnimation.bind(this);
    this.removeLetter.bind(this);

    this.recursiveGenerateLetters();
  }

  public readonly state: IState;

  public searchFunction = (text: string) => {
    this.setState((state: IState) => {
      return {
        searchText: text,
        filteredLetters: state.letters
          .filter((_letter: LetterType) => _letter.isVisible)
          .filter((_letter: LetterType) => this.searchPredicate(_letter.text, text))
          .slice(0, MAX_LETTERS)
      };
    });
  };

  public switchTheme = () => {
    this.setState((state: IState) => {
      return {
        isDark: !state.isDark
      };
    });
  };

  public onCheckboxChange = (id: string) => {
    this.setState((state: IState) => {
      const newCheckedLetterIds: { [id: string]: boolean } = state.checkedLetterIds;
      newCheckedLetterIds[id] = !newCheckedLetterIds[id];
      return { checkedLetterIds: newCheckedLetterIds };
    });
  };

  public newMail = async () => {
    const id: string = new Date().getTime().toString();
    const { author, authorAbbr } = generateAuthorNameWithAbbr();
    const text: string[] = await generateText();
    const subject: string = text[0].split('.')[0].substr(3);
    const date: string = generateDate();

    this.setState((state: IState) => {
      const newCheckedLetterIds: { [id: string]: boolean } = state.checkedLetterIds;
      newCheckedLetterIds[id] = false;

      const letter: LetterType = {
        id,
        text,
        authorAbbr,
        author,
        subject,
        date,
        isVisible: true,
        isChecked: false,
        hasAddAnimation: true,
        hasDeleteAnimation: false
      };
      const newLetters: LetterType[] = [letter, ...state.letters];
      if (newLetters.length > MAX_LETTERS) {
        newLetters[MAX_LETTERS].isVisible = false;
      }
      return {
        letters: newLetters,
        filteredLetters: newLetters
          .filter((_letter: LetterType) => _letter.isVisible)
          .filter((_letter: LetterType) => this.searchPredicate(_letter.text, state.searchText))
          .slice(0, MAX_LETTERS),
        checkedLetterIds: newCheckedLetterIds
      };
    });
  };

  public selectAll = () => {
    this.setState((state: IState) => {
      const newCheckedLetterIds: { [id: string]: boolean } = state.checkedLetterIds;
      state.filteredLetters.forEach((letter: LetterType) => {
        newCheckedLetterIds[letter.id] = !state.isAllChecked;
      });
      return {
        isAllChecked: !state.isAllChecked,
        checkedLetterIds: newCheckedLetterIds
      };
    });
  };

  public deleteLetters = async () => {
    this.setState((state: IState) => {
      return {
        letters: state.letters.map((letter: LetterType) => {
          const newLetter: LetterType = letter;
          if (newLetter.isVisible && state.checkedLetterIds[letter.id]) {
            newLetter.hasDeleteAnimation = true;
          }
          return newLetter;
        }),
        isAllChecked: false
      };
    });
  };

  private recursiveGenerateLetters = async () => {
    await sleep(100);
    await this.newMail();

    const fiveMinute = 300000;
    const maxTime = 600000;
    const minTime = 10;
    const time = Math.max(fiveMinute - this.last, generateRandomInt(minTime, maxTime));
    this.last = time;

    await sleep(time);
    this.recursiveGenerateLetters();
  };

  public removeAddAnimation = (id: string) => {
    this.setState((state: IState) => {
      return {
        letters: state.letters.map((letter: LetterType) => {
          const newLetter: LetterType = letter;
          if (id === letter.id) {
            newLetter.hasAddAnimation = false;
          }
          return newLetter;
        })
      };
    });
  };

  public removeLetter = (id: string) => {
    this.setState((state: IState) => {
      const newLetters: LetterType[] = state.letters.filter(
        (letter: LetterType) => id !== letter.id
      );
      const newFilteredLetters: LetterType[] = newLetters
        .filter((letter: LetterType) => this.searchPredicate(letter.text, state.searchText))
        .slice(0, MAX_LETTERS)
        .map((letter: LetterType) => {
          const newLetter: LetterType = letter;
          newLetter.isVisible = true;
          return newLetter;
        });
      return {
        letters: newLetters,
        filteredLetters: newFilteredLetters
      };
    });
  };

  private searchPredicate = (text: string[], searchText: string) => {
    return text.find((value: string) => {
      return value.includes(searchText);
    });
  };

  public render() {
    return (
      <div
        className={classNames(
          styles.app,
          this.state.isDark ? styles.app_darkTheme : styles.app_lightTheme
        )}
      >
        <Header
          searchFunction={this.searchFunction}
          switchTheme={this.switchTheme}
          isDark={this.state.isDark}
        />
        <Main
          searchText={this.state.searchText}
          isDark={this.state.isDark}
          letters={this.state.filteredLetters}
          isAllChecked={this.state.isAllChecked}
          checkedLetterIds={this.state.checkedLetterIds}
          deleteLetters={this.deleteLetters}
          onCheckboxChange={this.onCheckboxChange}
          selectAll={this.selectAll}
          removeAddAnimation={this.removeAddAnimation}
          removeLetter={this.removeLetter}
          newMail={this.newMail}
        />
      </div>
    );
  }
}
