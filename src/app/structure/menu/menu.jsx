import React, { Component } from 'react';

import './menu.css';

const actions = [
  { title: 'Входящие', fragment: 'inbox' },
  { title: 'Отправленные', fragment: 'sent' },
  { title: 'Удалённые', fragment: 'deleted' },
  { title: 'Спам', fragment: 'spam' },
  { title: 'Черновики', fragment: 'drafts' },
  { title: 'Создать папку', fragment: 'createdir' }
];

export class Menu extends Component {
  render() {
    return (
      <section className="menu">
        <button type="button" className="menu__to-write">
          Написать
        </button>
        <ul className="menu__bar">
          {actions.map(action => {
            return (
              <li className="menu__action" key={action.fragment}>
                <a href={`#${action.fragment}`} className="menu__text-ref">
                  {action.title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
