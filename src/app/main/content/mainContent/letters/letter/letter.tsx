import *as React from 'react';

import classnames from 'classnames';
import styles from './letter.module.css';

interface IProps {
  isDark: boolean;
  isChecked: boolean;
  addAnimation: boolean;
  deleteAnimation: boolean;
  removeAnimation: (id: number) => void;
  id: number;
  deleteLetter: (id :number) => void;
  changeCheckbox: (id: number) => void;
  openLetter: (text: string[]) => void;
  text: string[];
  author: string;
  subject: string;
  date: string;
}

export class Letter extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
    this.makeClassName = this.makeClassName.bind(this);
    this.deleteAnimation = this.deleteAnimation.bind(this);
  }

  public readonly props: IProps;

  makeClassName() {
    if (this.props.addAnimation) {
      return classnames(styles.letter, styles.letter__animatedAddLetter);
    }
    if (this.props.deleteAnimation) {
      return classnames(styles.letter, styles.letter__animatedDeleteLetter);
    }
    return styles.letter;
  }

  deleteAnimation() {
    if (this.props.addAnimation) {
      this.props.removeAnimation(this.props.id);
    }
    if (this.props.deleteAnimation) {
      this.props.deleteLetter(this.props.id);
    }
  }

  render() {
    return (
      <div className={this.makeClassName()} onAnimationEnd={this.deleteAnimation}>
        <input
          className={this.props.isDark ? styles.letter__checkbox_dark : styles.letter__checkbox}
          type="checkbox"
          checked={this.props.isChecked}
          onChange={() => this.props.changeCheckbox(this.props.id)}
        />
        <a
          href="#"
          className={styles.letter__delLine}
          onClick={() => this.props.openLetter(this.props.text)}
        >
          <div className={styles.letter__yLogo}>
            <div className={styles.letter__yLogoText}>Я</div>
          </div>
          <span className={classnames(this.props.isDark ? styles.letter__textSenderLetter_dark : styles.letter__textSenderLetter, styles.letter_isBold)}>{this.props.author}</span>
          <div className={styles.letter__markNewLetter} />
          <span className={classnames(this.props.isDark ? styles.letter__textLetter_dark : styles.letter__textSenderLetter, styles.letter_isBold)}>{this.props.subject}</span>
          <span className={this.props.isDark ? styles.letter__data_dark : styles.letter__data}>{this.props.date}</span>
        </a>
      </div>
    );
  }
}
