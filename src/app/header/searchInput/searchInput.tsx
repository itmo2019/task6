import React, { Component } from 'react';

import styles from './searchInput.module.css';

export class SearchInput extends Component {
  public render() {
    return (
      <div className={styles.searchInput}>
        <input className={styles.searchInput__input} type="text" placeholder="Поиск"/>
        <span className={styles.searchInput__close}>&#x2715;</span>
      </div>
    );
  }
}
