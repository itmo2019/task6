import *as React from 'react';

import styles from './main.module.css';
import { Menu } from './left-menu';
import { Content } from './content';
import {
  generateDate,
  generateAuthor,
  generateText,
  generateRandomInt
} from './scripts/letterGeneratorUtils';
import {ILetter} from '../types/type';

const MAX_LETTERS = 30;

interface IState {
  counter: number;
  letters: ILetter[];
  isAllChecked: boolean;
  checkedLetterIds: {[id: string]: boolean};
}

interface IProps {
  isDark: boolean;
  searchText: string;
}

export class Main extends React.Component {
  public readonly state: IState;
  public readonly props: IProps;
  last = 300000;

  constructor(props: IProps) {
    super(props);
    this.props = props;

    this.state = {
      letters: [],
      counter: 0,
      isAllChecked: false,
      checkedLetterIds: {}
    };
    this.deleteLetters = this.deleteLetters.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.removeAnimation = this.removeAnimation.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);
    this.newMail = this.newMail.bind(this);
    this.GenerateLetters();
  }

  removeLetterById = (letters : ILetter[], id: number) => {
    let newLetters = letters;
    newLetters = newLetters.filter(letter => letter.id !== id);
    let count = 0;
    for (let i = 0; i < newLetters.length; i++) {
      if (count < MAX_LETTERS) {
        newLetters[i].isVisible = true;
        count++;
      } else {
        newLetters[i].isVisible = false;
      }
    }
    return newLetters;
  };

  setChecked = (id: number, checked: {[id: string]: boolean}) => {
    const newChecked = checked;
    newChecked[id] = !newChecked[id];
    return newChecked;
  };

  changeCheckbox(id: number) {
    this.setState((state: IState) => {
      return { checkedLetterIds: this.setChecked(id, state.checkedLetterIds) };
    });
  }

  selectAll() {
    const newCheckedLetterIds = this.state.checkedLetterIds;
    this.state.letters.forEach(letter => {
      if (letter.isVisible) {
        newCheckedLetterIds[letter.id] = !this.state.isAllChecked;
      }
    });
    this.setState((state: IState) => {
      return {
        isAllChecked: !state.isAllChecked,
        checkedLetterIds: newCheckedLetterIds
      };
    });
  }

  deleteLetters() {
    const oldLetters = this.state.letters;
    const newLetters = oldLetters.map(letter => {
      const newLetter = letter;
      if (this.state.checkedLetterIds[newLetter.id]) {
        newLetter.deleteAnimation = true;
      }
      return newLetter;
    });

    this.setState({
      letters: newLetters,
      isAllChecked: false
    });
  }

  async newMail() {
    const id: string = `${this.state.counter}`;
    this.setState((state: IState) => {
      return { counter: state.counter + 1 };
    });

    const author = generateAuthor();
    const text = await generateText();
    const subject = text[0].split('.')[0].substr(0);
    const date = generateDate();

    const newCheckedLetterIds = this.state.checkedLetterIds;
    newCheckedLetterIds[id] = false;
    const newLetters = this.state.letters;

    for (let i = 0; i < newLetters.length; i++) {
      newLetters[i].isVisible = i < MAX_LETTERS - 1;
    }

    this.setState((state: IState) => {
      return {
        letters: [
          {
            id,
            text,
            author,
            subject,
            date,
            isChecked: false,
            isVisible: true,
            addAnimation: true,
            deleteAnimation: false
          },
          ...state.letters
        ],
        checkedLetterIds: newCheckedLetterIds
      };
    });
  }

  deleteLetter(id: number) {
    this.setState((state: IState) => {
      return { letters: this.removeLetterById(state.letters, id) };
    });
  }

  removeAnimation(id: number) {
    const letters1 = this.state.letters;
    const newLetters = letters1.map(value => {
      const tmp = value;
      if (tmp.id === id) {
        tmp.addAnimation = false;
      }
      return tmp;
    });
    this.setState({
      letters: newLetters
    });
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async gen(){
    for (let i = 0; i < 1000; i++){
      await this.sleep(100);
      await this.newMail();
    }
  }

  async GenerateLetters() {
    await this.sleep(100);
    await this.newMail();

    const fiveMinute = 300000;
    const maxTime = 600000;
    const minTime = 10;
    const time = Math.max(fiveMinute - this.last, generateRandomInt(minTime, maxTime));
    this.last = time;

    await this.sleep(time);
    this.GenerateLetters();
  }

  render() {
    return (
      <main className={styles.main}>
        <Menu newLetterButtonOnClick={this.newMail}/>
        <Content
          deleteLetters={this.deleteLetters}
          letters={this.state.letters}
          selectAll={this.selectAll}
          isAllChecked={this.state.isAllChecked}
          changeCheckbox={this.changeCheckbox}
          checkedLetterIds={this.state.checkedLetterIds}
          removeAnimation={this.removeAnimation}
          deleteLetter={this.deleteLetter}
          searchText={this.props.searchText}
          isDark={this.props.isDark}
        />
      </main>
    );
  }
}
