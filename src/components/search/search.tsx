import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './search.module.css';

const b = bemify('search', styles);

class Search extends Component {
  render(): React.ReactNode {
    return (
      <div className={b()}>
        <input className={b('text')} placeholder="Поиск" />
        <button type="button" className={b('close')}>
          ╳
        </button>
      </div>
    );
  }
}

export default Search;
