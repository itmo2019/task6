import React, { Component } from 'react';

import styles from './searchInput.module.css';
import reset from '../images/reset.png';

export class SearchInput extends Component {

  private inputVal ?: HTMLInputElement;

  resetForm = () => {
    this.inputVal!.value = '';
  };

  render() {
    return (
      <div className={styles.header__search}>
        <input
          type="text"
          onChange={el => (this.inputVal = el.target)}
          placeholder="Поиск"
          className={styles.header__input}
        />
        <button type="button" className={styles.header__button} onClick={this.resetForm}>
          <img src={reset} height="12" width="12" alt="reset" />
        </button>
      </div>
    );
  }
}
