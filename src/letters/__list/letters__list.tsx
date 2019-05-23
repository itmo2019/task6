import React, { Component } from 'react';

import styles from './List.module.css';
import Letter, { ILetter } from '../__letter/letters__letter';

interface IProps {
  theme: string;
  letters: ILetter[];
  handleCheckbox(checkbox: React.ChangeEvent<HTMLInputElement>, number: number): void;
  open(number: number): void;
}

export default class LettersList extends Component<IProps, {}> {
  private makeJSXLetters() {
    const jsxLetters = [];
    const letters = this.props.letters;
    for (let i = 0; i < letters.length; i++) {
      const l = letters[i];
      jsxLetters.push(
        <Letter
          author={l.author}
          theme={l.theme}
          authorImage={l.authorImage}
          read={l.read}
          checked={l.checked}
          number={i}
          handleCheckbox={this.props.handleCheckbox}
          open={this.props.open}
          styleTheme={this.props.theme}
          date={l.date}
        />
      );
    }
    return jsxLetters;
  }

  public render() {
    return React.createElement('div', { className: styles.list }, this.makeJSXLetters());
  }
}
