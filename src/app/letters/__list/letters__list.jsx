import React, { Component } from 'react';

import './letters__list.css';
import Letter from '../__letter/letters__letter';
import yandexOval from '../../../images/Oval-9.png';
import ya from '../../../images/Fill-154.png';

import { rndAuthor, getRandomInt, rndTheme } from '../content';

export default class LettersList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.letters = [
      <Letter
        author="Яндекс.Паспорт"
        theme="Доступ к аккаунту восстановлен"
        date="6 авг"
        authorImage={LettersList.createYandexAuthorImage()}
        read={false}
      />,
      <Letter
        author="Команда Яндекс.Почты"
        theme="Как читать почту с мобильного"
        date="6 июл"
        authorImage={LettersList.createYandexAuthorImage()}
        read={false}
      />,
      <Letter
        author="Команда Яндекс.Почты"
        theme="Как читать почту с мобильного"
        date="6 июл"
        authorImage={LettersList.createYandexAuthorImage()}
        read
      />,
      <Letter
        author="Яндекс"
        theme="Соберите всю почту в этот ящик"
        date="6 июл"
        authorImage={LettersList.createYandexAuthorImage()}
        read
      />
    ];
    this.newLetter = this.newLetter.bind(this);
  }

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
    let sum = 0;

    for (let i = 1; i < 300; i++) {
      sum += 10 * getRandomInt(1, 600);
      setTimeout(this.newLetter, sum);
    }
  }

  newLetter() {
    const author = rndAuthor();
    this.setState(state => {
      state.letters.reverse();
      state.letters.push(<Letter author={author} theme={rndTheme(author)} date="6 июл" read />);
      state.letters.reverse();
      return { letters: state.letters };
    });
    let s = 0;
    for (let i = 0; i < this.state.letters.length; i++) {
      if (this.state.letters[i].props.read) {
        s++;
      }
    }
    alert(s);
  }

  render() {
    return React.createElement('div', { className: 'letters__list' }, this.state.letters);
  }
}
