import React from 'react';

import styles from './search.module.css';
import headerStyles from './../header.module.css';

function Search() {
  const classes = `${styles.search} ${styles.header__search} ${headerStyles['header__inline-element']}`;
  return (
    <div className={classes}>
      <div className={styles.search__text}>Поиск</div>
      <div className={styles.search__close}>×</div>
    </div>
  );
}

export default Search;
