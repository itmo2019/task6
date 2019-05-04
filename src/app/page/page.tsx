import React, { Component } from 'react';

import { Header } from '../header/header';
import { Nav } from './nav';
import { Content } from '../content/content';
import { genAuthorImage, genAuthorName, genHeadText, genText } from '../scripts/scripts';
import { LetterType } from '../types/types';
import styles from './page.module.css';

const MAX_LETTERS = 30;

interface MyState {
  checked: {[id: string]: boolean},
  letters: LetterType[],
  count: number,
  isSelectAll: boolean,
  text: string[],
  searchText: string
}

export class Page extends Component {

  public state: MyState;

  public last: number;

  constructor(props: any) {
    super(props);

    this.state = {
      checked: {},
      letters: [],
      count: 0,
      isSelectAll: false,
      text: [],
      searchText: ''
    };

    this.newLetter = this.newLetter.bind(this);
    this.deleteMails = this.deleteMails.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
    this.setText = this.setText.bind(this);
    this.markRead = this.markRead.bind(this);
    this.setRead = this.setRead.bind(this);
    this.removeAddAnimation = this.removeAddAnimation.bind(this);
    this.makeDelete = this.makeDelete.bind(this);
    this.setSearchText = this.setSearchText.bind(this);
    this.last = 0;

    this.newMail = this.newMail.bind(this);
  }

  newLetter = () => {
    const id: string = `letter-id-${this.state.count}`;

    this.setState((state: MyState) => {
      return { count: state.count + 1 };
    });

    const authorName: string = genAuthorName();
    const authorImage: string = genAuthorImage();
    const headText: string = genHeadText();
    const letterText: string[] = genText();

    const newChecked: {[id: string]: boolean} = this.state.checked;
    newChecked[id] = false;
    const newLetters = this.state.letters;

    const newLetter: LetterType = {
      id,
      letterText,
      authorName,
      authorImage,
      headText,
      isChecked: false,
      isVisible: true,
      isRead: true,
      addAnimation: true,
      deleteAnimation: false
    };

    newLetter.isVisible = this.isLetterHasText(this.state.searchText, newLetter);
    let count: number = 0;
    if (newLetter.isVisible) {
      count += 1;
    }
    for (let i: number = 0; i < newLetters.length; i++) {
      if (count < MAX_LETTERS && this.isLetterHasText(this.state.searchText, newLetters[i])) {
        newLetters[i].isVisible = true;
        count++;
      } else {
        newLetters[i].isVisible = false;
      }
    }

    this.setState((state: MyState) => {
      return {
        letters: [newLetter].concat(state.letters),
        checked: newChecked
      };
    });
  };

  selectAll = () => {
    const newChecked: {[id: string]: boolean} = this.state.checked;
    for (let i = 0; i < Math.min(this.state.letters.length, MAX_LETTERS); i++) {
      newChecked[this.state.letters[i].id] = !this.state.isSelectAll;
    }
    this.setState((state: MyState) => {
      return {
        isSelectAll: !state.isSelectAll,
        checked: newChecked
      };
    });
  };

  checkboxChange = (id: string) => {
    const newChecked: {[id: string]: boolean} = this.state.checked;
    newChecked[id] = !newChecked[id];
    this.setState({
      checked: newChecked
    });
  };

  deleteMails = () => {
    const newLetters: LetterType[] = this.state.letters.map(letter => {
      const newLetter: LetterType = letter;
      if (this.state.checked[newLetter.id]) {
        newLetter.deleteAnimation = true;
      }
      return newLetter;
    });

    this.setState({
      letters: newLetters,
      isSelectAll: false
    });

  };

  setText = (text: string[]) => {
    this.setState({
      text
    });
  };

  markRead = (id: string, val: LetterType) => {
    const val1: LetterType = val;
    if (val1.id === id) {
      val1.isRead = false;
    }
    return val1;
  };

  setRead = (id: string) => {
    const newLetters: LetterType[] = this.state.letters;
    const letters1: LetterType[] = newLetters.map(value => this.markRead(id, value));
    this.setState({
      letters: letters1
    });
  };

  removeAddAnimation = (id: string) => {
    const letters1: LetterType[] = this.state.letters;
    const newLetters: LetterType[] = letters1.map(value => {
      const tmp: LetterType = value;
      if (tmp.id === id) {
        tmp.addAnimation = false;
      }
      return tmp;
    });
    this.setState({
      letters: newLetters
    });
  };

  isLetterHasText = (text: string, letter: LetterType) => {
    if (text.length === 0) {
      return true;
    } else {
      if (letter.headText.toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) !== -1
        || letter.authorName.toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) !== -1) {
        return true;
      } else {
        let f: boolean = false;
        for (let i: number = 0; i < letter.letterText.length && !f; i++) {
          if (letter.letterText[i].toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) !== -1) {
            f = true;
          }
        }
        return f;
      }
    }
  };

  makeDelete = (id: string) => {
    const newLetters: LetterType[] = this.state.letters.filter(letter => letter.id !== id);
    let count: number = 0;
    for (let i: number = 0; i < newLetters.length; i++) {
      if (count < MAX_LETTERS && this.isLetterHasText(this.state.searchText, newLetters[i])) {
        newLetters[i].isVisible = true;
        count++;
      } else {
        newLetters[i].isVisible = false;
      }
    }
    this.setState({
      letters: newLetters
    });
  };

  newMail() {
    this.newLetter();
    const fiveMinute: number = 300000;
    const maxTime: number = 600000;
    const minTime: number = 10;
    const time: number = Math.max(
      fiveMinute - this.last,
      Math.floor(Math.random() * (maxTime - minTime) + minTime)
    );
    this.last = time;
    setTimeout(this.newMail, time);
  }

  setSearchText = (text: string) => {
    const newLetters: LetterType[] = this.state.letters;
    let count: number = 0;

    for (let i: number = 0; i < newLetters.length; i++) {
      if (count < MAX_LETTERS && this.isLetterHasText(text, newLetters[i])) {
        newLetters[i].isVisible = true;
        count++;
      } else {
        newLetters[i].isVisible = false;
      }
    }

    this.setState({
      letters: newLetters,
      searchText: text
    });

  };

  render() {
    return (
      <div className={styles.className}>
        <Header setSearchText={this.setSearchText}/>
        <Nav newLetter={this.newLetter} />
        <Content
          deleteMails={this.deleteMails}
          letters={this.state.letters}
          selectAll={this.selectAll}
          isSelectAll={this.state.isSelectAll}
          checkboxChange={this.checkboxChange}
          checked={this.state.checked}
          text={this.state.text}
          setText={this.setText}
          setRead={this.setRead}
          removeAddAnimation={this.removeAddAnimation}
          makeDelete={this.makeDelete}
        />
      </div>
    );
  }
}
