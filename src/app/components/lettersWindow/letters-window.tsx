import * as React from 'react';

import * as styles from './letters-window.module.css';

import { LettersWindowHeader } from './header/letters-window-header';
import { LettersWindowBody } from './body/letters-window-body';
import { LettersWindowFooter } from './footer/letters-window-footer';
import { Line } from './line/line';
import { CreateLetter, ILetter, ILetterInfo } from './createLetter';

interface IProps {
  bLight: boolean;
  searchValue: string;
}

interface IState {
  bMainCheckbox: boolean;
  bToolbar: boolean;
  letters: ILetter[];
  showingLetterContent: ILetterInfo | null;
}

export class LettersWindow extends React.Component<IProps, IState> {
  private static filterLetters(letter: ILetter, searchValue: string): boolean {
    const { info } = letter;
    return (
      info.author.includes(searchValue) ||
      info.theme.includes(searchValue) ||
      info.content.includes(searchValue)
    );
  }

  private stack: ILetter[] = [];

  private maxLettersOnPage: number = 5;

  public constructor(props: IProps) {
    super(props);
    this.addNewLetter = this.addNewLetter.bind(this);
    this.showLetter = this.showLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
    this.clickOnSimpleCheckbox = this.clickOnSimpleCheckbox.bind(this);
    this.clickOnMainCheckbox = this.clickOnMainCheckbox.bind(this);
    this.markSelectedLetters = this.markSelectedLetters.bind(this);
    this.removeLetters = this.removeLetters.bind(this);
    this.doSearch = this.doSearch.bind(this);
    this.state = {
      bMainCheckbox: false,
      bToolbar: false,
      letters: [],
      showingLetterContent: null
    };
  }

  public componentDidMount() {
    const THIS = this;
    setTimeout(function newMail() {
      const fiveMin = 5 * 60 * 1000;
      const rndNum = Math.floor(Math.random() * 5 * 60 * 1000);
      THIS.addNewLetter();
      setTimeout(newMail, fiveMin + rndNum);
    }, 1000);
  }

  public addNewLetter() {
    const letter: ILetter = CreateLetter();
    const allLetters: ILetter[] = this.state.letters;
    allLetters.unshift(letter);
    if (this.state.letters.length - 1 >= this.maxLettersOnPage) {
      const last = allLetters.pop();
      if (last !== undefined) {
        this.stack.push(last);
      }
      this.setState(state => ({
        bMainCheckbox: state.bMainCheckbox,
        bToolbar: state.bToolbar,
        letters: allLetters,
        showingLetterContent: state.showingLetterContent
      }));
      return;
    }
    this.setState(state => ({
      bMainCheckbox: state.bMainCheckbox,
      bToolbar: state.bToolbar,
      letters: allLetters,
      showingLetterContent: state.showingLetterContent
    }));
  }

  public showLetter(letterInfo: ILetterInfo) {
    this.setState(state => ({
      bMainCheckbox: state.bMainCheckbox,
      bToolbar: state.bToolbar,
      letters: state.letters,
      showingLetterContent: letterInfo
    }));
  }

  public closeLetter() {
    this.setState(state => ({
      bMainCheckbox: state.bMainCheckbox,
      bToolbar: state.bToolbar,
      letters: state.letters,
      showingLetterContent: null
    }));
  }

  public clickOnSimpleCheckbox(id?: number) {
    const allLetters = this.state.letters;
    for (let i = 0; i < allLetters.length; i++) {
      if (allLetters[i].id === id) {
        allLetters[i].bCheckbox = !allLetters[i].bCheckbox;
        break;
      }
    }
    this.setState(state => ({
      bMainCheckbox: allLetters.every(letter => letter.bCheckbox),
      bToolbar: allLetters.some(letter => letter.bCheckbox),
      letters: allLetters,
      showingLetterContent: state.showingLetterContent
    }));
  }

  public clickOnMainCheckbox() {
    const allLetters = this.state.letters;
    for (let i = 0; i < allLetters.length; i++) {
      allLetters[i].bCheckbox = !this.state.bMainCheckbox;
    }
    this.setState(state => ({
      bMainCheckbox: !state.bMainCheckbox,
      bToolbar: allLetters.some(letter => letter.bCheckbox),
      letters: allLetters,
      showingLetterContent: state.showingLetterContent
    }));
  }

  public markSelectedLetters() {
    const allLetters = this.state.letters;
    for (let i = 0; i < allLetters.length; i++) {
      if (allLetters[i].bCheckbox) {
        allLetters[i].bMarked = true;
      }
    }
    this.setState(state => ({
      bMainCheckbox: state.bMainCheckbox,
      bToolbar: state.bToolbar,
      letters: allLetters,
      showingLetterContent: state.showingLetterContent
    }));
  }

  public removeLetters() {
    const filteredLetters = this.state.letters.filter(letter => !letter.bMarked);
    while (this.stack.length > 0 && filteredLetters.length < this.maxLettersOnPage) {
      const elem = this.stack.pop();
      if (elem !== undefined) {
        filteredLetters.push(elem);
      }
    }
    this.setState(state => ({
      bMainCheckbox: false,
      bToolbar: filteredLetters.some(letter => letter.bCheckbox),
      letters: filteredLetters,
      showingLetterContent: state.showingLetterContent
    }));
  }

  private doSearch(): ILetter[] {
    const { searchValue } = this.props;
    const lettersFromState = this.state.letters.filter(letter =>
      LettersWindow.filterLetters(letter, searchValue)
    );
    const lettersFromStack = this.stack.filter(letter =>
      LettersWindow.filterLetters(letter, searchValue)
    );
    return lettersFromState.concat(lettersFromStack.reverse());
  }

  public render() {
    let renderedLetters: ILetter[];
    if (this.props.searchValue === '') {
      renderedLetters = this.state.letters;
    } else {
      renderedLetters = this.doSearch();
    }
    return (
      <div
        className={`${styles.main} ${
          this.props.bLight ? styles['main-light'] : styles['main-dark']
        }`}
      >
        <LettersWindowHeader
          bToolbar={this.state.bToolbar}
          bMainCheckbox={this.state.bMainCheckbox}
          bLight={this.props.bLight}
          clickOnMainCheckbox={this.clickOnMainCheckbox}
          markSelectedLetters={this.markSelectedLetters}
        />
        <Line />
        <LettersWindowBody
          bLight={this.props.bLight}
          letters={renderedLetters}
          showingLetterContent={this.state.showingLetterContent}
          showLetter={this.showLetter}
          closeLetter={this.closeLetter}
          clickOnSimpleCheckbox={this.clickOnSimpleCheckbox}
          removeLetters={this.removeLetters}
        />
        <Line />
        <LettersWindowFooter bLight={this.props.bLight} />
      </div>
    );
  }
}
