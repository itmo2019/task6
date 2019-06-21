import React, { Component } from 'react';

import styles from './Footer.module.css';

export default class LettersFooter extends Component {
  public render() {
    return (
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Помощь и обратная связь&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Реклама
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2001—2018, Яндекс
        </p>
      </div>
    );
  }
}
