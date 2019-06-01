import React, { Component } from 'react';

import styles from './Search.module.css';
import SearchSuggestion from './__suggestion/search__suggestion';
import SearchCross from './__cross/search__cross';

interface IProps {
  theme: string;
  handleFilterChange(event: React.ChangeEvent<HTMLInputElement>): void;
  removeSearchTextInput(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
  display: boolean;
}

export default class Search extends Component<IProps, {}> {
  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }

  private createLoader() {
    if (this.props.display) {
      return <div className={styles.loader} />;
    }
    return null;
  }

  public render() {
    return (
      <section className={`${styles.search} ${this.getTheme()}`}>
        <SearchSuggestion
          theme={this.props.theme}
          handleFilterChange={this.props.handleFilterChange}
        />
        <SearchCross removeSearchTextInput={this.props.removeSearchTextInput} />
      </section>
    );
  }
}
