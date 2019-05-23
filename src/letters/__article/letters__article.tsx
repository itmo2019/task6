import React, { Component } from 'react';

import styles from './Article.module.css';
import LettersCross from './__cross/letters__cross';

interface IProps {
  articleHeader: string;
  articleContent: string;
  close(): void;
  theme: string;
}

export default class LettersArticle extends Component<IProps, {}> {
  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }

  private getTextTheme() {
    if (this.props.theme === 'light') {
      return styles.textBlack;
    }
    return styles.textWhite;
  }

  public render() {
    return (
      <div className={`${styles.article} ${this.getTheme()}`}>
        <h3 className={`${styles.articleTitle} ${this.getTextTheme()}`}>
          {this.props.articleHeader}
        </h3>
        <p className={this.getTextTheme()}>{this.props.articleContent}</p>
        <LettersCross close={this.props.close} />
      </div>
    );
  }
}
