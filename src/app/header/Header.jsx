import React, { Component } from 'react';

import './Header.css';
import logo from '../../sourse/YandexMail.png';

export class Header extends Component {
  render() {
    let darkClass;
    let oneLineDark = "high-part__one-line";
    let searchDark = "high-part high-part__search";
    if (this.props.isDark) {
      darkClass = 'black-side';
      oneLineDark += ' dark-side';
      searchDark += ' black-side';
    }

    return (
      <header className={darkClass}>
        <section className="high-part high-part__before-lines">
          <div className={oneLineDark}></div>
          <div className={oneLineDark}></div>
          <div className={oneLineDark}></div>
        </section>
        <section className="high-part">
          <a className="high-part__yandex-mail_unstressed-link" href="https://mail.yandex.ru">
            <img
              className="high-part__yandex-mail_picture"
              alt="yandexMailPicture"
              src={logo}
              width="153"
              height="31"
            />
          </a>
        </section>
        <section className={searchDark}>
          <input type="text" placeholder="Поиск" className="high-part__search-word" onChange={e=>this.props.searchLetters(e.target.value)}/>
          <button type="reset" className="high-part__search-cancel-sign">&#9747;</button>
        </section>
      </header>
    );
  }
}
