import React from 'react';

import styles from './hamburger.module.css';
import headerStyles from './../header.module.css';

function Header() {
  const classes = `${styles.hamburger} ${headerStyles['header__inline-element']}`;
  return (
    <div className={classes}>
      <div className={styles.hamburger__div} />
      <div className={styles.hamburger__div} />
      <div className={styles.hamburger__div} />
    </div>
  );
}

export default Header;
