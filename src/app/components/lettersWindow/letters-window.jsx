import React, { Component } from 'react';

import './letters-window.css';

import { LettersWindowHeader } from './header/letters-window-header';
import { LettersWindowBody } from './body/letters-window-body';
import { LettersWindowFooter } from './footer/letters-window-footer';
import { Line } from './line/line';
import { CreateLetter } from './createLetter';

export class LettersWindow extends Component {
  stack = [];

  maxLettersOnPage = 5;

  constructor(props) {
    super(props);
    this.addNewLetter = this.addNewLetter.bind(this);
    this.showLetter = this.showLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
    this.clickOnSimpleCheckbox = this.clickOnSimpleCheckbox.bind(this);
    this.clickOnMainCheckbox = this.clickOnMainCheckbox.bind(this);
    this.markSelectedLetters = this.markSelectedLetters.bind(this);
    this.removeLetters = this.removeLetters.bind(this);
    this.state = {
      bMainCheckbox: false,
      bToolbar: false,
      letters: [],
      showingLetterContent: {
        bLetterContent: false,
        info: null
      }
    };
  }

  componentDidMount() {
    const THIS = this;
    setTimeout(function newMail() {
      const fiveMin = 5 * 60 * 1000;
      const rndNum = Math.floor(Math.random() * 5 * 60 * 1000);
      THIS.addNewLetter();
      setTimeout(newMail, fiveMin + rndNum);
    }, 1000);
  }

  addNewLetter() {
    const letter = CreateLetter();
    const allLetters = this.state.letters;
    allLetters.unshift(letter);
    if (this.state.letters.length - 1 >= this.maxLettersOnPage) {
      const last = allLetters.pop();
      this.stack.push(last);
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

  showLetter(letterInfo) {
    this.setState(state => ({
      bMainCheckbox: state.bMainCheckbox,
      bToolbar: state.bToolbar,
      letters: state.letters,
      showingLetterContent: {
        bLetterContent: true,
        info: letterInfo
      }
    }));
  }

  closeLetter() {
    this.setState(state => ({
      bMainCheckbox: state.bMainCheckbox,
      bToolbar: state.bToolbar,
      letters: state.letters,
      showingLetterContent: {
        bLetterContent: false,
        info: null
      }
    }));
  }

  clickOnSimpleCheckbox(id) {
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

  clickOnMainCheckbox() {
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

  markSelectedLetters() {
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

  removeLetters() {
    const filteredLetters = this.state.letters.filter(letter => !letter.bMarked);
    while (this.stack.length > 0 && filteredLetters.length < this.maxLettersOnPage) {
      const elem = this.stack.pop();
      filteredLetters.push(elem);
    }
    this.setState(state => ({
      bMainCheckbox: false,
      bToolbar: filteredLetters.some(letter => letter.bCheckbox),
      letters: filteredLetters,
      showingLetterContent: state.showingLetterContent
    }));
  }

  render() {
    return (
      <div className="letters-window">
        <LettersWindowHeader
          removeLetters={this.markSelectedLetters}
          bToolbar={this.state.bToolbar}
          clickOnMainCheckbox={this.clickOnMainCheckbox}
          bMainCheckbox={this.state.bMainCheckbox}
        />
        <Line />
        <LettersWindowBody
          letters={this.state.letters}
          showingLetterContent={this.state.showingLetterContent}
          showLetter={this.showLetter}
          closeLetter={this.closeLetter}
          clickOnSimpleCheckbox={this.clickOnSimpleCheckbox}
          removeLetters={this.removeLetters}
        />
        <Line />
        <LettersWindowFooter />
      </div>
    );
  }
}
