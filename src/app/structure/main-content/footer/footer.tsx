import React, { Component } from 'react';

import styles from './footer.module.css';
import { FooterText } from './footerText/footerText';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footer__texts}>
          <FooterText text="Помощь и обратная связь" id="help" />
          <FooterText text="Реклама" id="adv" />
          <span>&copy; 2001&mdash;2019, Яндекс</span>
        </div>
      </footer>
    );
  }
}
