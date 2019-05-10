import React from 'react';

import styles from './search-bar.module.css';

class SearchBar extends React.Component {
  render() {
    return <label>
      <input type="search" className={styles['header__search-bar']} placeholder="Поиск"/>
    </label>;
  }
}

export default SearchBar;
