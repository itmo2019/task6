import React, { Component } from 'react';

import styles from './Search.module.css';
import SearchSuggestion from './__suggestion/search__suggestion';
import SearchCross from './__cross/search__cross';

interface IProps {
  theme: string;
}


export default class Search extends Component<IProps, {}> {
  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }
  public render() {
    return (
      <section className={`${styles.search} ${this.getTheme()}`}>
        <SearchSuggestion theme={this.props.theme}/>
        <SearchCross />
      </section>
    );
  }
}
