import React, { Component } from 'react';

import styles from './main.module.css';
import letterStyles from './content/mainContent/letters/letter/letter.module.css';
import { Menu } from './menu/menu';
import { Content } from './content/content';
import {
  generateDate,
  generateAuthorNameWithAbbr,
  generateText,
  generateRandomInt
} from './scripts/lettterGeneratorUtils';
import { LetterType } from '../types/types';

const MAX_LETTERS = 30;

interface IProps {
  searchText: string;
}

interface IState {
  letters: LetterType[];
  isAllChecked: boolean;
  checkedLetterIds: { [id: string]: boolean };
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
      checkedLetterIds: {}
    };

    this.newMail.bind(this);
    this.selectAll.bind(this);
    this.onCheckboxChange.bind(this);
    this.deleteLetters.bind(this);

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
      const isVisible: boolean = state.letters.length <= MAX_LETTERS;
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
        isVisible,
        classList: [letterStyles.letter, letterStyles.letter__animatedAddLetter]
      };
      return {
        letters: [letter, ...state.letters],
        checkedLetterIds: newCheckedLetterIds
      };
    });
    await sleep(1000);
    this.setState((state: IState) => {
      return {
        letters: state.letters.map((letter: LetterType) => {
          if (letter.classList.length > 1) {
            letter.classList = letter.classList.slice(0, 1);
          }
          return letter;
        })
      };
    });
  };

  public selectAll = () => {
    this.setState((state: IState) => {
      const newCheckedLetterIds: { [id: string]: boolean } = state.checkedLetterIds;
      state.letters.forEach((letter: LetterType) => {
        if (letter.isVisible) {
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
          if (state.checkedLetterIds[letter.id] && letter.isVisible) {
            letter.classList.push(letterStyles.letter__animatedDeleteLetter);
          }
          return letter;
        })
      };
    });
    await sleep(1000);
    this.setState((state: IState) => {
      return {
        letters: state.letters
          .filter((letter: LetterType) => !state.checkedLetterIds[letter.id] || !letter.isVisible)
          .map((letter: LetterType, index: number) => {
            if (index < MAX_LETTERS) {
              letter.isVisible = true;
            }
            return letter;
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

  public readonly props: IProps;

  public render() {
    return (
      <main className={styles.main}>
        <Menu newLetterButtonOnClick={this.newMail}/>
        <Content
          letters={this.state.letters}
          deleteLetters={this.deleteLetters}
          checkedLetterIds={this.state.checkedLetterIds}
          onCheckboxChange={this.onCheckboxChange}
          isAllChecked={this.state.isAllChecked}
          selectAll={this.selectAll}
          searchText={this.props.searchText}
        />
      </main>
    );
  }
}
