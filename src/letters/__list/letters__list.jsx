import React, { Component } from 'react';

import './letters__list.css';
import Letter from '../__letter/letters__letter';

export default class LettersList extends Component {
  makeJSXLetters() {
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
        />
      );
    }
    return jsxLetters;
  }

  render() {
    return React.createElement('div', { className: 'letters__list' }, this.makeJSXLetters());
  }
}
