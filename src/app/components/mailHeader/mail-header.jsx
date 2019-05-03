import React from 'react';

import styles from './mail-header.module.css';

import logoYandex from '../../images/yandexLogo.svg';
import logoYandexService from '../../images/yandexServiceLogo.svg';

export function MailHeader() {
  return (
    <header className={styles.main}>
      <div className={styles['svgicon-menu']} />
      <div className={styles['logo-container']}>
        <a
          className={styles['svgicon-yandex']}
          target="_blank"
          rel="noopener noreferrer"
          href="https://yandex.ru/"
        >
          <img src={logoYandex} alt="Logo Yandex" />
        </a>
        <a
          className={styles['svgicon-mail']}
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.yandex.ru/"
        >
          <img src={logoYandexService} alt="Logo Yandex service" />
        </a>
      </div>
      <div className={styles['search-container']}>
        <input className={styles['search-container__search']} type="search" placeholder="Поиск" />
      </div>
    </header>
  );
}
