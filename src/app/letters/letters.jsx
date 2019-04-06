import React, { Component } from 'react';

import './letters.css';
import LettersOpmenu from './__opmenu/letters__opmenu';
import LettersList from './__list/letters__list';
import LettersArticle from './__article/letters__article';
import LettersCross from './__cross/letters__cross';
import LettersFooter from './__footer/letters__footer';

export default class Letters extends Component {
  render() {
    return (
      <div className="letters">
        <input type="checkbox" className="letters__marker" id="first-checkbox" />
        <div className="letters__line" id="first-letter-line" />
        <LettersOpmenu />
        <LettersList />
        <LettersArticle />
        <LettersCross />
        <div className="letters__line" id="letters__footer-line" />
        <LettersFooter />
      </div>
    );
  }
}
