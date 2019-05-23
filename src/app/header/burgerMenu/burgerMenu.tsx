import React, { Component } from 'react';

import styles from './burgerMenu.module.css';

export class BurgerMenu extends Component {
  public render() {
    return (
      <div className={styles.burgerMenu}>
        <div className={styles.burgerMenu__rectangle} />
        <div className={styles.burgerMenu__rectangle} />
        <div className={styles.burgerMenu__rectangle} />
      </div>
    );
  }
}
