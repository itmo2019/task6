import React, { Component } from 'react';
import styles from './Article.module.css';

interface IProps {
  id: string;
  openLetters: () => void;
  letterText: string;
}

export class Article extends Component<IProps> {
  public render() {
    return (
      <div>
        <input
          id={this.props.id}
          type="checkbox"
          className={styles.inp}
          onChange={() => this.props.openLetters()}
        />
        <article className={styles.article}>
          <label htmlFor={this.props.id} className={styles.articleCancelSign}>&#9747;</label>
          {this.props.letterText}
        </article>
      </div>
    );
  }
}
