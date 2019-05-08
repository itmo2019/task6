import React from 'react';

import styles from './menu.module.css';

function Menu() {
  return (
    <a className={styles.header__menu} href="#" onClick={(click) => {
      click.preventDefault();
    }}>
      <div className={styles.menu__stripe} />
      <div className={styles.menu__stripe} />
      <div className={styles.menu__stripe} />
    </a>
  );
}

export default Menu;
