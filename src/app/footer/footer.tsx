import React, { Component } from 'react';

import * as styles from './footer.module.css';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.className}>
        <ul className={styles.menu}>
          <li className={styles.menuLink}>
            <a href="." className={styles.link}>
              <p>Помощь и обратная связь</p>
            </a>
          </li>

          <li className={styles.menuLink}>
            <a href="." className={styles.link}>
              <p>Реклама</p>
            </a>
          </li>

          <li className={styles.menuLink}>
            <p className={styles.myCopy}>&copy; 2001-2018, Яндекс</p>
          </li>
        </ul>
      </footer>
    );
  }
}
