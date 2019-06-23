import React, { Component } from 'react';
import { LetterHeader } from './LetterHeader';
import { Letter } from './Letter';
import { genLetterText, getRandomFromRange } from '../../functions/Functions';
import { Article } from './Article';

import './Letter.css';

export class LettersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let code;
    if (this.props.openId !== -1) {
      code =
        <Article
        id={this.props.openId}
        key={this.props.openId}
        letterText={this.props.letters[this.props.openId].letterText}
        openLetters={this.props.openLetters}
      />;
    } else {
      code = <section id="window-letters__letters-list_after-first">
        {
          this.props.letters.
          filter(letter => {return letter.isVisible}).
          slice(0, 100).map(letter => {
            return (
              <Letter
                isDark={this.props.isDark}
                markNotNew={this.props.markNotNew}
                letterChose={this.props.letterChose}
                openArticle={this.props.openArticle}
                id={letter.id}
                key={letter.id}
                letterText={letter.letterText}
                color={letter.color}
                sender={letter.sender}
                date={letter.date}
                classS={letter.classS}
                chose={letter.chose}
              />
            );
          })
        }
      </section>;
    }
    let darkClass = 'window-letters';
    if (this.props.isDark) {
      darkClass += ' black-side';
    }

    return (
      <section className={darkClass}>
        <LetterHeader
          letterChose={this.props.letterChose}
          letterAdded={this.props.letterAdded}
          lettersDeleted={this.props.lettersDeleted}
          allLettersChose={this.props.allLettersChose}
          changeColor={this.props.changeColor}
        />
        <ul className="window-letters__letters-list">

          {code}
        </ul>
      </section>
    );
  }
}
