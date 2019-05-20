import React, { Component } from 'react';

import './lettersList.css';
import { Letter } from './letter/letter';

export class LetterList extends Component {
  render() {
    return (
      <ul className="main-block__all-letters">
        {this.props.letters.map(letter => {
          if (letter.isVisible)
            return (
              <Letter
                key={letter.key}
                id={letter.id}
                text={letter.text}
                author={letter.author}
                topic={letter.topic}
                date={letter.date}
                isChecked={this.props.checkedLetters[letter.key]}
                onCheckboxChange={this.props.onCheckboxChange}
                openLetter={this.props.openLetter}
              />
            );
        })}
      </ul>
    );
  }
}
