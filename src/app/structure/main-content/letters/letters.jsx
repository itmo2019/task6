import React, { Component } from 'react';

import './letters.css';
import { LetterPage } from './letter-page/letterPage';
import { LetterList } from './letters-list/letterList';

export class Letters extends Component {
  render() {
    return this.props.isLetterOpened ? (
      <LetterPage text={this.props.openedLetterText} closeLetter={this.props.closeLetter} />
    ) : (
      <LetterList
        letters={this.props.letters}
        checkedLetters={this.props.checkedLetters}
        openLetter={this.props.openLetter}
        onCheckboxChange={this.props.onCheckboxChange}
      />
    );
  }
}
