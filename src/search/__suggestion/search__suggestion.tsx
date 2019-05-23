import React, { Component } from 'react';

import styles from './Suggestion.module.css';

interface IProps {
  theme: string;
}

export default class SearchSuggestion extends Component<IProps, {}> {
  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }
  public render() {
    return (
      <input type="text" className={`${styles.suggestion} ${this.getTheme()}`} value="Поиск" />
    );
  }
}
