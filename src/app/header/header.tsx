import React, { Component, useContext } from 'react';

import styles from './header.module.css';
import yandexLogoLight from './Yandex.png';
import nightModeTheme from './sun.png';
import lightModeTheme from './moon.png';
import yandexLogoNight from './logo-dark.png'
import { Menu } from '../menu/menu';
import { ThemeContext, Theme } from '../theme-context';

interface IHeaderProps {
  changeMode: () => void
}

export class Header extends Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.props.changeMode();
  }

  render() {
    let theme = this.context;
    let fl = false;
    if (theme === Theme.night) {
      fl = true;
    }
    return (
      <header className={styles.header}>
        <Menu />
        <img
          className={styles['header__pic-yandex']}
          src={fl ? yandexLogoNight : yandexLogoLight}
          alt="Яндекс Почта"
          height="31px"
          width="162px"
        />
        <input className={styles.header__search} type="text" placeholder="Поиск" />
        <div className={styles.header__close}>×</div>
        <img
          className={styles['header__mode-night']}
          src={fl ? nightModeTheme : lightModeTheme}
          alt="Ночной режим"
          height="35px"
          onClick={this.changeMode}
        />
    </header>
    );
  }
}

Header.contextType = ThemeContext;
