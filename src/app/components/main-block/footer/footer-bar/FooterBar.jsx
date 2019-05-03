import React from 'react';
import styles from './FooterBar.module.css';

export class FooterBar extends React.Component {
  render() {
    return (
      <nav className={styles['footer-bar']}>
        <a className={`${styles.link} ${styles.item}`} href="#help">
          Помощь и обратная связь
        </a>
        <a className={`${styles.link} ${styles.item}`} href="#adv">
          Реклама
        </a>
        <a className={`${styles.link} ${styles.item}`} href="#yandex">
          &#9400; 2001—2018, Яндекc
        </a>
      </nav>
    );
  }
}
