import React, { Component } from 'react';

import './letters.css';
import LettersOpmenu from './__opmenu/letters__opmenu';
import LettersList from './__list/letters__list';
import LettersArticle from './__article/letters__article';
import LettersFooter from './__footer/letters__footer';
import { getRandomInt, rndAuthor, rndTheme, contents } from './content';
import yandexOval from '../images/Oval-9.png';
import ya from '../images/Fill-154.png';

export default class Letters extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      letters: [
        {
          author: 'Яндекс.Паспорт',
          theme: 'Доступ к аккаунту восстановлен',
          date: '6 авг',
          authorImage: Letters.createYandexAuthorImage(),
          read: false,
          checked: false
        },
        {
          author: 'Команда Яндекс.Почты',
          theme: 'Как читать почту с мобильного',
          date: '6 июл',
          authorImage: Letters.createYandexAuthorImage(),
          read: false,
          checked: false
        },
        {
          author: 'Команда Яндекс.Почты',
          theme: 'Как читать почту с мобильного',
          date: '6 июл',
          authorImage: Letters.createYandexAuthorImage(),
          read: true,
          checked: false
        },
        {
          author: 'Яндекс',
          theme: 'Соберите всю почту в этот ящик',
          date: '6 июл',
          authorImage: Letters.createYandexAuthorImage(),
          read: true,
          checked: false
        }
      ],
      articleHeader: 'Header',
      articleContent: 'Content',
      mode: 'letters'
    };
    this.newLetter = this.newLetter.bind(this);
    this.deleteOnclick = this.deleteOnclick.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    let sum = 0;

    for (let i = 1; i < 10; i++) {
      sum += 10 * getRandomInt(1, 600);
      setTimeout(this.newLetter, sum);
    }
  }

  newLetter() {
    const author = rndAuthor();
    this.setState(state => {
      state.letters.unshift({
        author,
        theme: rndTheme(author),
        date: '6 июл',
        read: false,
        checked: false
      });
      return state;
    });
  }

  handleCheckbox(checkbox, number) {
    this.state.letters[number].checked = checkbox.target.checked;
    this.setState(state => {
      return state;
    });
  }

  open(number) {
    this.setState(state => {
      const articleHeader = state.letters[number].theme;
      const articleContent = contents[articleHeader];
      state.letters[number].read = true;
      return {
        letters: state.letters,
        articleHeader,
        articleContent,
        mode: 'article'
      };
    });
  }

  createView() {
    if (this.state.mode === 'article') {
      return (
        <LettersArticle
          articleHeader={this.state.articleHeader}
          articleContent={this.state.articleContent}
          close={this.close}
        />
      );
    }
    return (
      <LettersList
        letters={this.state.letters}
        handleCheckbox={this.handleCheckbox}
        open={this.open}
      />
    );
  }

  close() {
    this.setState(state => {
      state.mode = 'letters';
      return state;
    });
  }

  deleteOnclick() {
    let kek = 0;
    while (kek++ < 4) {
      let hasAny = false;
      for (let i = 0; i < this.state.letters.length; i++) {
        if (this.state.letters[i].checked) {
          this.state.letters.splice(i, 1);
          hasAny = true;
          break;
        }
      }
      if (hasAny) {
        continue;
      }
      break;
    }
    this.setState(state => {
      return state;
    });
  }

  render() {
    return (
      <div className="letters">
        <input type="checkbox" className="letters__marker" id="first-checkbox" />
        <div className="letters__line" id="first-letter-line" />
        <LettersOpmenu deleteOnclick={this.deleteOnclick} />
        {this.createView()}
        <div className="letters__line" id="letters__footer-line" />
        <LettersFooter />
      </div>
    );
  }
}
