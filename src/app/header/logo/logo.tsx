import React from 'react';

import styles from './logo.module.css';
import headerStyles from './../header.module.css';

function Logo() {
  const classes = `${styles.logo} ${headerStyles['header__inline-element']}`;
  return (
    <div className={classes}>
      <img src="images/logo.png" alt="Ямдекс Почта" width="153" height="31" />
    </div>
  );
}

export default Logo;
