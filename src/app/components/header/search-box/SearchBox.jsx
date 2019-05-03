import React from 'react';
import styles from './SearchBox.module.css';

export class SearchBox extends React.Component {
  render() {
    return <input className={styles['search-box']} type="search" placeholder="Поиск" />;
  }
}
