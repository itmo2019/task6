import React, { Component } from 'react';

import './letters__list.css';
import Letter from '../__letter/letters__letter';
import yandexOval from '../../../images/Oval-9.png';
import ya from '../../../images/Fill-154.png';

import { rndAuthor, getRandomInt, rndTheme } from '../content';

export default class LettersList extends Component {
  static createYandexAuthorImage() {
    return (
      <div className="author-image">
        <figure className="yandex-oval">
          <img src={yandexOval} alt="Yandex" />
        </figure>
        <figure className="Ya">
          <img src={ya} alt="Yandex" />
        </figure>
      </div>
    );
  }

  componentDidMount() {
    const sum = 0;

    /* for (let i = 1; i < 300; i++) {
      sum += 10 * getRandomInt(1, 600);
      setTimeout(this.newLetter, sum);
    } */
  }

  render() {
    return (
      <div className="letters__list">
        <Letter
          author="Яндекс.Паспорт"
          theme="Доступ к аккаунту восстановлен"
          date="6 авг"
          authorImage={LettersList.createYandexAuthorImage()}
          read={false}
        />
        <Letter
          author="Яндекс.Паспорт"
          theme="Доступ к аккаунту восстановлен"
          date="6 июл"
          authorImage={LettersList.createYandexAuthorImage()}
          read={false}
        />
        <Letter
          author="Яндекс.Паспорт"
          theme="Доступ к аккаунту восстановлен"
          date="6 июл"
          authorImage={LettersList.createYandexAuthorImage()}
          read
        />
        <Letter
          author="Яндекс.Паспорт"
          theme="Доступ к аккаунту восстановлен"
          date="6 июл"
          authorImage={LettersList.createYandexAuthorImage()}
          read
        />
      </div>
    );
  }
}
