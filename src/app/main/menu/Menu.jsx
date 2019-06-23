import React, { Component } from 'react';

import './Menu.css';

export class Menu extends Component {
  render() {
    return(
      <section className="menu">
        <a className="menu__actions-list_unstressed-link">
          <button name="writeButton" className="menu__write-button" onClick="newMail()">
            Написать
          </button>
        </a>
        <ul className="menu__actions-list">
          <li className="menu__navigation">
            <a href="" className="menu__actions-list_unstressed-link">Входящие</a>
          </li>
          <li className="menu__navigation">
            <a href="" className="menu__actions-list_unstressed-link">Отправленные</a>
          </li>
          <li className="menu__navigation">
            <a href="" className="menu__actions-list_unstressed-link">Спам</a>
          </li>
          <li className="menu__navigation">
            <a href="" className="menu__actions-list_unstressed-link">Черновики</a>
          </li>
          <li className="menu__navigation">
            <a href="" className="menu__actions-list_unstressed-link">Создать папку</a>
          </li>
        </ul>
      </section>
    );
}
}
