import React, { useContext } from 'react';
import classNames from 'classnames';

import styles from './footer.module.css';
import innerBlock from '../block-inner/block-inner.module.css';
import { ThemeContext, Theme } from '../theme-context';

export function Footer() {
  let theme = useContext(ThemeContext);
  let fl = false;
  if (theme === Theme.night) {
    fl = true;
  }
  return (
    <footer className={classNames(
      innerBlock['block-inner__footer'],
      `footer`,
      fl ? innerBlock['block-inner__footer-night'] : '')}>
      <a href="." className={styles.footer__links}>
        Помощь и обратная связь
      </a>
      <a href="." className={styles.footer__links}>
        Реклама
      </a>
      <span className={styles.footer__links}>©2001-2018, Яндекс</span>
    </footer>
  );
}
