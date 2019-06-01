import React, { Component } from 'react';

import styles from './mainContent.module.css';
import { Letters } from './letters/letters';
import { AllFunctions } from './all-functions/allFunctions';
import { generateNewLetter, randomInt } from './scripts/generator';
import { Footer } from './footer/footer';
import { LetterType } from '../../app';

const LETTERS_ON_PAGE = 30;

interface IState {
  isLetterOpened: false;
  openedLetterText: string[];
  letters: LetterType[];
  isAllChecked: boolean;
  checkedLetters: { [id: string]: boolean };
}

export class MainContent extends Component {
  public constructor(props : any) {
    super(props);

    this.state = {
      isLetterOpened: false,
      openedLetterText: [],
      letters: [],
      isAllChecked: false,
      checkedLetters: {}
    };

    this.onCheckboxChange.bind(this);
    this.selectAll.bind(this);
    this.newMail.bind(this);
    this.deleteLetter.bind(this);
    this.getRandomLetter.bind(this);
    this.openLetter.bind(this);
    this.closeLetter.bind(this);

    setTimeout(this.getRandomLetter, 100);
  }

  public readonly state: IState;

  public onCheckboxChange = (id: string) => {
    this.setState((prevState : IState)=> {
      const newCheckedLetters : { [id: string]: boolean } = prevState.checkedLetters;
      newCheckedLetters[id] = !newCheckedLetters[id];
      return {
        isAllChecked: false,
        checkedLetters: newCheckedLetters
      };
    });
  };

  public newMail = () => {
    const newLetter : LetterType = generateNewLetter();
    this.setState((prevState : IState)=> {
      const newCheckedLetters = prevState.checkedLetters;
      const newLetters = prevState.letters;
      newCheckedLetters[newLetter.id] = false;
      for (let i = newLetters.length - 1; i >= LETTERS_ON_PAGE - 1; i--) {
        newLetters[i].isVisible = false;
        newLetters[i].isChecked = false;
        newCheckedLetters[newLetters[i].key] = false;
      }
      return {
        letters: [newLetter, ...newLetters],
        checkedLetters: newCheckedLetters,
        isAllChecked: false
      };
    });
  };

  private getRandomLetter = () => {
    const t = randomInt(10, 300000) + 300000;
    this.newMail();
    setTimeout(this.getRandomLetter, t);
  };

  public selectAll = () => {
    this.setState((prevState : IState) => {
      const newCheckedLetters = prevState.checkedLetters;
      prevState.letters.forEach(letter => {
        if (letter.isVisible) {
          newCheckedLetters[letter.key] = !prevState.isAllChecked;
        }
      });
      return {
        isAllChecked: !prevState.isAllChecked,
        checkedLetters: newCheckedLetters
      };
    });
  };

  public deleteLetter = () => {
    this.setState((prevState : IState) => {
      const newLetters = prevState.letters.filter(letter => !prevState.checkedLetters[letter.key]);
      for (let i = 0; i < Math.min(newLetters.length, LETTERS_ON_PAGE); i++) {
        newLetters[i].isVisible = true;
      }
      return {
        letters: newLetters,
        isAllChecked: false
      };
    });
  };

  public openLetter = (text : string[]) => {
    this.setState({
      isLetterOpened: true,
      openedLetterText: text
    });
  };

  public closeLetter = () => {
    this.setState({
      isLetterOpened: false,
      openedLetterText: null
    });
  };

  render() {
    return (
      <div className={styles.mainBlock}>
        <AllFunctions
          isLetterOpened={this.state.isLetterOpened}
          selectAll={this.selectAll}
          newMailOnClick={this.newMail}
          deleteLetter={this.deleteLetter}
          isChecked={this.state.isAllChecked}
        />
        <Letters
          letters={this.state.letters}
          isLetterOpened={this.state.isLetterOpened}
          checkedLetters={this.state.checkedLetters}
          openLetter={this.openLetter}
          closeLetter={this.closeLetter}
          openedLetterText={this.state.openedLetterText}
          onCheckboxChange={this.onCheckboxChange}
        />
        <Footer />
      </div>
    );
  }
}
