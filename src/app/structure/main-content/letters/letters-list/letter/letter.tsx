import React, { Component } from 'react';

import styles from './letter.module.css';
import logo1 from './icons/ebay.png';
import logo2 from './icons/yandex.png';
import logo3 from './icons/live.png';
import logo4 from './icons/facebook.png';
import logo5 from './icons/twitter.png';
import logo6 from './icons/reddit.png';
import logo7 from './icons/youtube.png';
import { LetterType } from '../../../../../app';
import classNames from 'classnames';

interface IProps {
  key : string;
  letterStates: LetterType;
  isChecked: boolean;
  openLetter: (text: string[]) => void;
  onCheckboxChange: (id: string) => void;
}

export class Letter extends Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.firms = {
      ebay: logo1,
      yandex: logo2,
      live: logo3,
      facebook: logo4,
      twitter: logo5,
      reddit: logo6,
      youtube: logo7
    };
  }

  private readonly firms: { [id: string]: string };

  render() {
    return (
      <li className={classNames(styles.mainBlock__letter, styles.animationInsert)}>
        <div>
          <input
            type="checkbox"
            className={styles.check}
            onChange={() => this.props.onCheckboxChange(this.props.letterStates.id)}
            checked={this.props.isChecked}
          />
          <div onClick={() => this.props.openLetter(this.props.letterStates.text)}>
            <div className={styles.mainBlock__img}>
              <img src={this.firms[this.props.letterStates.author]} alt={this.props.letterStates.author} width="30"/>
            </div>
            <span
              className={classNames(styles.mainBlock__mailFrom, styles.boldText)}>{this.props.letterStates.author}</span>
            <div className={styles.mainBlock__mailNotRead}/>
            <span className={classNames(styles.mainBlock__topic, styles.boldText)}>{this.props.letterStates.topic} </span>
            <time className={styles.mainBlock__date} dateTime={this.props.letterStates.date}>
              {this.props.letterStates.date}
            </time>
          </div>
        </div>
      </li>
    );
  }
}
