import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './letter.module.css';

interface IProps {
  classNames: string[];
  isChecked: boolean;
  onCheckboxChange: (id: string) => void;
  id: string;
  openLetter: (text: string[]) => void;
  text: string[];
  authorAbbr: string;
  author: string;
  subject: string;
  date: string;
  isDark: boolean;
}

export class Letter extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div className={classNames(this.props.classNames)}>
        <input
          className={classNames(
            styles.letter__checkbox,
            this.props.isDark
              ? styles.letter__checkbox_darkTheme
              : styles.letter__checkbox_lightTheme
          )}
          type="checkbox"
          checked={this.props.isChecked}
          onChange={() => this.props.onCheckboxChange(this.props.id)}
        />
        <a
          href="#"
          className={styles.letter_defaultLink}
          onClick={() => this.props.openLetter(this.props.text)}
        >
          <div className={styles.letter__authorLogo}>
            <div className={styles.letter__authorAbbr}>{this.props.authorAbbr}</div>
          </div>
          <div className={classNames(styles.letter__author, styles.boldText, styles.letter__text)}>
            {this.props.author}
          </div>
          <div
            className={classNames(
              styles.letter__newLetterFlag,
              styles.letter__newLetterFlagEnabled
            )}
          />
          <div className={classNames(styles.letter__subject, styles.boldText, styles.letter__text)}>
            {this.props.subject}
          </div>
          <div className={styles.letter__time}>{this.props.date}</div>
        </a>
      </div>
    );
  }
}
