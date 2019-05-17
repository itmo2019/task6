import React, { Component } from 'react';

import * as styles from './letters.module.css';

import { LetterHead } from '../letterHead/letterHead';
import { LetterType } from '../types/types';

interface LettersProps {
  letters: LetterType[],
  checkboxChange: (id: string) => void,
  checked: {[id: string]: boolean},
  setText: (text: string[]) => void,
  setRead: (id: string) => void,
  removeAddAnimation: (id: string) => void,
  display: boolean
  showLetter: () => void
}

export class Letters extends Component<LettersProps> {

  constructor(props: LettersProps) {
    super(props);

    this.makeClassName = this.makeClassName.bind(this);
  }

  makeClassName() {
    return this.props.display ? styles.letters : styles.hidden;
  }

  render() {
    return (
      <ul className={this.makeClassName()}>
        {this.props.letters.map(letter => {
          if (letter.isVisible) {
            return (
              <LetterHead
                {...letter}
                key={letter.id}
                isChecked={this.props.checked[letter.id]}
                checkboxChange={this.props.checkboxChange}
                setText={this.props.setText}
                removeAddAnimation={this.props.removeAddAnimation}
                setRead={this.props.setRead}
                showLetter={this.props.showLetter}
              />
            );
          }
        })}
      </ul>
    );
  }
}
