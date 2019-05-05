import * as React from 'react';

import * as styles from './mail-header.module.css';

import logoYandexWhite from '../../images/yandexLogoWhite.svg';
import logoYandexBlack from '../../images/yandexLogoBlack.svg';
import logoYandexServiceWhite from '../../images/yandexServiceLogoWhite.svg';
import logoYandexServiceBlack from '../../images/yandexServiceLogoBlack.svg';
import { SearchInput } from './searchInput/search-input';

interface IProps {
  bLight: boolean;
  updateSearchInput: (value: string) => void;
  switchTheme: () => void;
}

export const MailHeader: React.FunctionComponent<IProps> = props => {
  return (
    <header className={styles.main}>
      <div
        className={`${styles['svgicon-menu']} ${
          props.bLight ? styles['svgicon-menu-light'] : styles['svgicon-menu-dark']
        }`}
      />
      <div className={styles['logo-container']}>
        <a
          className={styles['svgicon-yandex']}
          target="_blank"
          rel="noopener noreferrer"
          href="https://yandex.ru/"
        >
          <img src={props.bLight ? logoYandexBlack : logoYandexWhite} alt="Logo Yandex" />
        </a>
        <a
          className={styles['svgicon-mail']}
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.yandex.ru/"
        >
          <img
            src={props.bLight ? logoYandexServiceBlack : logoYandexServiceWhite}
            alt="Logo Yandex service"
          />
        </a>
      </div>
      <div className={styles['search-container']}>
        <SearchInput bLight={props.bLight} updateSearchInput={props.updateSearchInput} />
      </div>
      <button
        className={`${styles['switch-button']} ${
          props.bLight ? styles['switch-button-light'] : styles['switch-button-dark']
        }`}
        type="submit"
        onClick={props.switchTheme}
      >
        {props.bLight ? 'dark' : 'light'}
      </button>
    </header>
  );
};
