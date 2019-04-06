import React, { Component } from 'react';

import './menu.css';

export default class Menu extends Component {
  render() {
    return (
      <section id="menu">
        <div id="highlighted" />

        <div id="menu-items">
          <p id="inbox" className="menu highlighted">
            Входящие
          </p>
          <p id="sent" className="menu">
            Отправленные
          </p>
          <p id="trash" className="menu">
            Удаленные
          </p>
          <p id="spam" className="menu">
            Спам
          </p>
          <p id="drafts" className="menu">
            Черновики
          </p>
          <p id="new-folder" className="menu">
            Создать папку
          </p>
        </div>
      </section>
    );
  }
}
