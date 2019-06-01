import React from 'react';
import Hamburger from './hamburger/hamburger';
import Logo from './logo/logo';
import Search from './search/search';

import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Hamburger />
      <Logo />
      <Search />
    </div>
  );
}

export default Header;
