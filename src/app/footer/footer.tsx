import React from 'react';
import classNames from 'classnames';

import styles from './footer.module.css';
import innerBlock from '../block-inner/block-inner.module.css';

export function Footer() {
  return (
    <footer className={classNames(innerBlock['block-inner__footer'], `footer`)}>
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
