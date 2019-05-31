import React, { Component } from 'react';

import styles from './main.module.css';
import { Menu } from './menu/menu';
import { Content } from './content/content';
import {
  generateDate,
  generateAuthorNameWithAbbr,
  generateText,
  generateRandomInt
} from './scripts/lettterGeneratorUtils';
import { LetterType } from '../types/types';

interface IProps {
  searchText: string;
  isDark: boolean;
}

interface IState {
  letters: LetterType[];
  isAllChecked: boolean;
  checkedLetterIds: { [id: string]: boolean };
  visibleLetterIds: { [id: string]: boolean };
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class Main extends Component {
  private last: number = 300000;

  public constructor(props: IProps) {
    super(props);
    this.props = props;

    this.state = {
      letters: [],
      isAllChecked: false,
      checkedLetterIds: {},
      visibleLetterIds: {}
    };

    this.newMail.bind(this);
    this.selectAll.bind(this);
    this.onCheckboxChange.bind(this);
    this.deleteLetters.bind(this);
    this.removeAddAnimation.bind(this);
    this.removeLetter.bind(this);
    this.setVisibility.bind(this);

    this.recursiveGenerateLetters();
  }

  public readonly state: IState;

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
        isChecked: false,
        hasAddAnimation: true,
        hasDeleteAnimation: false
      };
      return {
        letters: [letter, ...state.letters],
        checkedLetterIds: newCheckedLetterIds
      };
    });
  };

  public selectAll = () => {
    this.setState((state: IState) => {
      const newCheckedLetterIds: { [id: string]: boolean } = state.checkedLetterIds;
      state.letters.forEach((letter: LetterType) => {
        if (state.visibleLetterIds[letter.id]) {
          newCheckedLetterIds[letter.id] = !state.isAllChecked;
        }
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
          if (state.visibleLetterIds[letter.id] && state.checkedLetterIds[letter.id]) {
            newLetter.hasDeleteAnimation = true;
          }
          return newLetter;
        }),
        isAllChecked: false
      };
    });
  };

  public setVisibility = (id: string, value: boolean) => {
    if (this.state.visibleLetterIds[id] === value) {
      return;
    }
    this.setState((state: IState) => {
      const newVisibleLetterIds: { [id: string]: boolean } = state.visibleLetterIds;
      newVisibleLetterIds[id] = value;
      return {
        visibleLetterIds: newVisibleLetterIds
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
      return {
        letters: state.letters.filter((letter: LetterType) => id !== letter.id)
      };
    });
  };

  public readonly props: IProps;

  public render() {
    return (
      <main className={styles.main}>
        <Menu newLetterButtonOnClick={this.newMail} />
        <Content
          letters={this.state.letters}
          deleteLetters={this.deleteLetters}
          checkedLetterIds={this.state.checkedLetterIds}
          onCheckboxChange={this.onCheckboxChange}
          isAllChecked={this.state.isAllChecked}
          selectAll={this.selectAll}
          isDark={this.props.isDark}
          removeAddAnimation={this.removeAddAnimation}
          removeLetter={this.removeLetter}
          searchText={this.props.searchText}
          setVisibility={this.setVisibility}
        />
      </main>
    );
  }
}
