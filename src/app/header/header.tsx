import React, { Component, useContext } from 'react';

import styles from './header.module.css';
import yandexLogo from './Yandex.png';
import nightMode from './Night.png';
import { Menu } from '../menu/menu';
import { ThemeContext } from '../theme-context';

interface IHeaderProps {
  changeMode: () => void
}

export class Header extends Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    // console.log("header", this);
    this.props.changeMode();
  }

  render() {
    let theme = this.context
    console.log(theme)
    return (
    <header className={styles.header}>
      <Menu />
      <img
        className={styles['header__pic-yandex']}
        src={yandexLogo}
        alt="Яндекс Почта"
        height="31px"
      />
      <input className={styles.header__search} type="text" placeholder="Поиск" />
      <div className={styles.header__close}>×</div>
      <img
        className={styles['header__mode-night']}
        src={nightMode}
        alt="Ночной режим"
        height="30px"
        onClick={this.changeMode}
      />
    </header>
    );
  }
}

Header.contextType = ThemeContext;
