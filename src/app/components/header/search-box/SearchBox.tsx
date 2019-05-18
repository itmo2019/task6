import React from 'react';
import styles from './SearchBox.module.css';
import {ThemeContext, themes} from "../../../../theme/theme-context";

export class SearchBox extends React.Component {
  render() {
    const colorStyle = this.context === themes.light ? styles.light : styles.dark;
    return <input className={`${styles['search-box']} ${colorStyle}`} type="search" placeholder="Поиск" />;
  }
}

SearchBox.contextType = ThemeContext;