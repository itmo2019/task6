import React, { Component } from 'react';
import classNames from 'classnames';
import { BurgerMenu } from '../burger-menu';
import { SearchBox } from '../search-box';
import styles from './Header.module.css';
import logo from '../../resources/img/main-logo.png';

interface IHeader {
  className?: string;
}

export class Header extends Component<IHeader> {
  public render() {
    return (
      <header className={classNames(styles.Header, this.props.className)}>
        <BurgerMenu className={styles.Header__BurgerMenu} />
        <img className={styles.Header__MainLogo} src={logo} alt="Яндекс Почта" />
        <SearchBox className={styles.Header__SearchBox} placeholder="Поиск" />
      </header>
    );
  }
}
