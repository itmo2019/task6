import React, { Component } from 'react';

import styles from './header.module.css';
import logo from './images/logo.png';
import classNames from 'classnames';
import { SearchInput } from './searchInput/searchInput';

export class Header extends Component {
  render() {
    return (
      <header className={classNames(styles.header, styles.clearfix)}>
        <div className={styles.header__lines}>
          <div className={styles.header__line} />
          <div className={styles.header__line} />
          <div className={styles.header__line} />
        </div>
        <div className={styles.header__mainLogo}>
          <img src={logo} alt="logo" />
        </div>
        <SearchInput />
      </header>
    );
  }
}
