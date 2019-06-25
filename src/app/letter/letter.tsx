import *as React from 'react';

import styles from './letter.module.css';
import classnames from 'classnames';

interface IProps {
  isDark: boolean;
  isSelected: boolean;
  changeAnimation: boolean;
  id: number;
  deleteChosenLetter: (id :number) => void;
  switchLetterCheckbox: (id: number) => void;
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
    this.changeAnimation = this.changeAnimation.bind(this);
  }

  public readonly props: IProps;

  changeAnimation() {
    if (this.props.changeAnimation) {
      this.props.deleteChosenLetter(this.props.id);
    }
  }

  render() {
    return (
      <div
        className={
          this.props.changeAnimation
            ? classnames(styles.letter, styles.letter__animatedDeleteLetter)
            : classnames(styles.letter, styles.letter__animatedAddLetter)
        }
        onAnimationEnd={this.changeAnimation}
      >
        <input
          className={this.props.isDark ? styles.letter__checkbox_dark : styles.letter__checkbox}
          type="checkbox"
          checked={this.props.isSelected}
          onChange={() => this.props.switchLetterCheckbox(this.props.id)}
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
          <span className={classnames(this.props.isDark ? styles.letter__textLetter_dark : styles.letter__textLetter, styles.letter_isBold)}>{this.props.subject}</span>
          <span className={this.props.isDark ? styles.letter__data_dark : styles.letter__data}>{this.props.date}</span>
        </a>
      </div>
    );
  }
}
