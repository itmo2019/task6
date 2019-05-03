import React, { Component } from 'react';

import styles from './letters-window-body.module.css';

import { LetterView } from '../letterView/letter-view';
import { Line } from '../line/line';
import { LetterContent } from '../letterContent/letter-content';

class LetterWithLine extends Component {
  componentDidMount() {
    document.addEventListener('transitionend', this.props.removeLetters);
  }

  render() {
    return (
      <div
        className={`${styles['letter-with-line']} ${
          this.props.oneLetter.bMarked ? 'start-transition-opacity' : ''
        }`}
      >
        <LetterView
          letter={this.props.oneLetter}
          clickOnSimpleCheckbox={this.props.clickOnSimpleCheckbox}
          showLetter={this.props.showLetter}
        />
        <Line />
      </div>
    );
  }
}

export function LettersWindowBody(props) {
  return (
    <div className={styles.main}>
      {props.showingLetterContent.bLetterContent ? (
        <LetterContent info={props.showingLetterContent.info} closeLetter={props.closeLetter} />
      ) : (
        props.letters.map(letter => (
          <LetterWithLine
            oneLetter={letter}
            key={letter.id}
            clickOnSimpleCheckbox={props.clickOnSimpleCheckbox}
            removeLetters={props.removeLetters}
            showLetter={props.showLetter}
          />
        ))
      )}
    </div>
  );
}
