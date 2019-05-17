import React, { Component } from 'react';

import * as styles from './letterHead.module.css';
import * as pageStyles from '../page/page.module.css';

interface LetterHeadProps {
  id: string,
  authorName: string,
  authorImage: string,
  letterText: string[],
  headText: string,
  isVisible: boolean,
  isChecked: boolean,
  checkboxChange: (id: string) => void,
  setText: (text: string[]) => void,
  addAnimation: boolean,
  removeAddAnimation: (id: string) => void,
  deleteAnimation: boolean,
  isRead: boolean
  setRead: (id: string) => void,
  showLetter: () => void,
  headTagDate: string
  headDate: string
}

export class LetterHead extends Component<LetterHeadProps> {

  constructor(props: LetterHeadProps) {
    super(props);

    this.makeClassName = this.makeClassName.bind(this);
    this.makeLinkClassName = this.makeLinkClassName.bind(this);
  }

  makeClassName() {
    if (this.props.addAnimation) {
      setTimeout(() => {
        this.props.removeAddAnimation(this.props.id);
      }, 1500);
      return styles.animatedAddLine;
    }

    if (this.props.deleteAnimation) {
      return styles.animatedDeleteLine;
    }

    if (!this.props.isVisible) {
      return styles.hidden;
    }

    return styles.letterHead;
  }

  makeLinkClassName() {
    return this.props.isRead ? styles.unread : styles.link;
  }

  render() {
    return (
      <li
        className={this.makeClassName()}
        key={this.props.id}
      >
        <label htmlFor={`${this.props.id}-checkbox`}>
          <input
            id={`${this.props.id}-checkbox`}
            className={styles.myCheckbox}
            type="checkbox"
            checked={this.props.isChecked}
            onChange={() => this.props.checkboxChange(this.props.id)}
          />
        </label>
        <a
          href="#"
          className={this.makeLinkClassName()}
          onClick={() => {
            this.props.setText(this.props.letterText);
            this.props.showLetter();
            this.props.setRead(this.props.id);
          }}
        >
          <img
            className={styles.authorImage}
            src={this.props.authorImage}
            alt="author logo"
          />
          <div className={styles.authorName}>
            <p className={pageStyles.myText}>{this.props.authorName}</p>
          </div>
          <div className={styles.read} />
          <div className={styles.text}>
            <p className={pageStyles.myText}>{this.props.headText}</p>
          </div>
          <div className={styles.date}>
            <time dateTime={this.props.headTagDate}>
              <p>{this.props.headDate}</p>
            </time>
          </div>
        </a>
        <div className={pageStyles.line} />
      </li>
    );
  }
}
