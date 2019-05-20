import React, { Component } from 'react';

import './mainContent.css';
import { Letters } from './letters/letters';
import { AllFunctions } from './all-functions/allFunctions';
import { generateNewLetter, randomInt } from './scripts/generator';
import { Footer } from './footer/footer';

const LETTERS_ON_PAGE = 30;

export class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLetterOpened: false,
      openedLetterText: null,
      letters: [],
      isAllChecked: false,
      checkedLetters: {}
    };

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.newMail = this.newMail.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.getRandomLetter = this.getRandomLetter.bind(this);
    this.openLetter = this.openLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);

    setTimeout(this.getRandomLetter, 100);
  }

  onCheckboxChange(id) {
    this.setState(prevState => {
      const newCheckedLetters = prevState.checkedLetters;
      newCheckedLetters[id] = !newCheckedLetters[id];
      return {
        isAllChecked: false,
        checkedLetters: newCheckedLetters
      };
    });
  }

  getRandomLetter() {
    const t = randomInt(10, 300000) + 300000;
    this.newMail();
    setTimeout(this.getRandomLetter, t);
  }

  selectAll() {
    this.setState(prevState => {
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
  }

  newMail() {
    const newLetter = generateNewLetter();
    this.setState(prevState => {
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
  }

  deleteLetter() {
    this.setState(prevState => {
      const newLetters = prevState.letters.filter(letter => !prevState.checkedLetters[letter.key]);
      for (let i = 0; i < Math.min(newLetters.length, LETTERS_ON_PAGE); i++) {
        newLetters[i].isVisible = true;
      }
      return {
        letters: newLetters,
        isAllChecked: false
      };
    });
  }

  openLetter(text) {
    this.setState({
      isLetterOpened: true,
      openedLetterText: text
    });
  }

  closeLetter() {
    this.setState({
      isLetterOpened: false,
      openedLetterText: null
    });
  }

  render() {
    return (
      <div className="main-block">
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
