import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './letter.module.css';

interface IProps {
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
  hasAddAnimation: boolean;
  hasDeleteAnimation: boolean;
  removeAddAnimation: (id: string) => void;
  removeLetter: (id: string) => void;
}

export class Letter extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  private getClassNames = () => {
    if (this.props.hasAddAnimation) {
      return classNames(styles.letter, styles.letter__animatedAddLetter);
    }
    if (this.props.hasDeleteAnimation) {
      return classNames(styles.letter, styles.letter__animatedDeleteLetter);
    }
    return styles.letter;
  };

  private handleAnimationEnd = () => {
    if (this.props.hasAddAnimation) {
      this.props.removeAddAnimation(this.props.id);
    }
    if (this.props.hasDeleteAnimation) {
      this.props.removeLetter(this.props.id);
    }
  };

  public readonly props: IProps;

  public render() {
    return (
      <div className={this.getClassNames()} onAnimationEnd={this.handleAnimationEnd}>
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
