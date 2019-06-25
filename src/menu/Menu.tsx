import React, { Component } from 'react';

import styles from './Menu.module.css';

export class Menu extends Component {
  public render() {
    return (
      <section className={styles.menu}>
        <a className={styles.actionsList_unstressedLink}>
          <button name="writeButton" className={styles.writeButton}>
            Написать
          </button>
        </a>
        <ul className={styles.actionsList}>
          <li className={styles.navigation}>
            <a href="" className={styles.actionsList_unstressedLink}>Входящие</a>
          </li>
          <li className={styles.navigation}>
            <a href="" className={styles.actionsList_unstressedLink}>Отправленные</a>
          </li>
          <li className={styles.navigation}>
            <a href="" className={styles.actionsList_unstressedLink}>Спам</a>
          </li>
          <li className={styles.navigation}>
            <a href="" className={styles.actionsList_unstressedLink}>Черновики</a>
          </li>
          <li className={styles.navigation}>
            <a href="" className={styles.actionsList_unstressedLink}>Создать папку</a>
          </li>
        </ul>
      </section>
    );
  }
}
