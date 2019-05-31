import React, { Component } from 'react';

import styles from './menu.module.css';

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
      <section className={styles.menu}>
        <button type="button" className={styles.menu__toWrite}>
          Написать
        </button>
        <ul className={styles.menu__bar}>
          {actions.map(action => {
            return (
              <li className={styles.menu__action} key={action.fragment}>
                <a href={`#${action.fragment}`} className={styles.menu__textRef}>
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
