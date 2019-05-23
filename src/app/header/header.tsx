import React, { Component } from 'react';

import styles from './header.module.css';
import logo from './images/yandex-mail-logo.svg';
import { BurgerMenu } from './burgerMenu/burgerMenu';
import { SearchInput } from './searchInput/searchInput';

interface IProps {
  searchFunction: (text: string) => void;
}

export class Header extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <header className={styles.header}>
        <BurgerMenu />
        <a href="https://mail.yandex.ru">
          <img className={styles.header__yandexMailLogo} src={logo} alt="logo" />
        </a>
        <SearchInput searchFunction={this.props.searchFunction} />
      </header>
    );
  }
}
