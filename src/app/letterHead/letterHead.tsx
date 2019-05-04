import React, { Component } from 'react';

import * as styles from './letterHead.module.css';
import * as pageStyles from '../page/page.module.css';

interface LetterHeadProps {
  id: string,
  authorName: string,
  authorImage: string,
  text: string[],
  headText: string,
  isVisible: boolean,
  isChecked: boolean,
  checkboxChange: (id: string) => void,
  setText: (text: string[]) => void,
  addAnimation: boolean,
  removeAddAnimation: (id: string) => void,
  deleteAnimation: boolean,
  makeDelete: (id: string) => void,
  isRead: boolean
  setRead: (id: string) => void,
  showLetter: () => void
}

export class LetterHead extends Component {

  public readonly props: LetterHeadProps;

  constructor(props: LetterHeadProps) {
    super(props);
    this.props = props;

    this.makeClassName = this.makeClassName.bind(this);
  }

  makeClassName() {
    if (this.props.addAnimation) {
      setTimeout(() => {
        this.props.removeAddAnimation(this.props.id);
      }, 1500);
      return styles.animatedAddLine;
    }
    if (this.props.deleteAnimation) {
      setTimeout(() => {
        this.props.makeDelete(this.props.id);
      }, 1500);
      return styles.animatedDeleteLine;
    }

    return styles.className;
  }

  render() {
    return (
      <li
        id={this.props.id}
        className={this.makeClassName()}
        key={this.props.id}
        style={{ display: this.props.isVisible ? 'inline' : 'none' }}
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
          className={
            this.props.isRead ? styles.unread : styles.link
          }
          onClick={() => {
            console.log(this.props.text);
            this.props.setText(this.props.text);
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
            <time dateTime="2019-03-07 18:01">
              <p>7 мар</p>
            </time>
          </div>
        </a>
        <div className={pageStyles.line} />
      </li>
    );
  }
}
