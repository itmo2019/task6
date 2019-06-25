import React, { Component } from 'react';
import cn from 'classnames';

import stylesMain from '../main/Main.module.css';
import styles from './Header.module.css';
import logo from '../sourse/YandexMail.png';
import darkLogo from '../sourse/YandexMail-dark.png';

interface IProps {
  searchLetters: (a: string) => void;
  isDark: boolean;
}

export class Header extends Component<IProps> {
  public render() {
    const { searchLetters, isDark } = this.props;
    const darkClass = cn({ [stylesMain.blackSide]: isDark });
    const oneLineDark = cn(styles.oneLine, {
      [styles.darkSide]: isDark
    });
    const searchDark = cn(styles.highPart, styles.search);
    const searchWordDark = cn(styles.searchWord, {
      [stylesMain.blackSide]: isDark
    });
    const highBefore = cn(styles.highPart, styles.beforeLines);
    let actualLogo;
    if (isDark) {
      actualLogo = darkLogo;
    } else {
      actualLogo = logo;
    }

    return (
      <header className={darkClass}>
        <section className={highBefore}>
          <div className={oneLineDark}></div>
          <div className={oneLineDark}></div>
          <div className={oneLineDark}></div>
        </section>
        <section className={styles.highPart}>
          <a className={styles.yandexMail_unstressedLink} href="https://mail.yandex.ru">
            <img
              className={styles.yandexMail_picture}
              alt="yandexMailPicture"
              src={actualLogo}
              width="153"
              height="31"
            />
          </a>
        </section>
        <section className={searchDark}>
          <input
            type="text"
            placeholder="Поиск"
            className={searchWordDark}
            onChange={e => searchLetters(e.target.value)}
          />
          <button type="reset" className={styles.searchCancelSign}>
            &#9747;
          </button>
        </section>
      </header>
    );
  }
}
