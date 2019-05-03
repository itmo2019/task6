import React from 'react';
import styles from './Header.module.css';

import yaLogo from './yandex-mail.png';
import { Hamburger } from './hamburger/Hamburger';
import { SearchBox } from './search-box/SearchBox';

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Hamburger />
        <img className={styles['ya-logo']} src={yaLogo} alt="yandex" />
        <SearchBox />
      </div>
    );
  }
}
