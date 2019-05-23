import React, { Component } from 'react';

import styles from './Letter.module.css';
import unread from '../../images/Oval.png';

export interface ILetter {
  author: string;
  theme: string;
  date: string;
  read: boolean;
  checked: boolean;
  authorImage: JSX.Element;
}

interface IProps extends ILetter {
  styleTheme: string;
  number: number;
  handleCheckbox(checkbox: React.ChangeEvent<HTMLInputElement>, number: number): void;
  open(number: number): void;
}

export default class Letter extends Component<IProps, {}> {
  public constructor(props: IProps) {
    super(props);
    this.state = {};
    this.open = this.open.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  private handleCheckbox(checkbox: React.ChangeEvent<HTMLInputElement>) {
    this.props.handleCheckbox(checkbox, this.props.number);
  }

  private convertReadProp() {
    if (this.props.read) {
      return styles.read;
    }
    return styles.unread;
  }

  private unreadMarker() {
    if (this.props.read) {
      return null;
    }
    return (
      <figure className={styles.unreadOval}>
        <img src={unread} alt="unread" />
      </figure>
    );
  }

  private open() {
    this.props.open(this.props.number);
  }

  private textTheme() {
    if (this.props.styleTheme === 'light') {
      return styles.textBlack;
    }
    return styles.textWhite;
  }

  private lineTheme() {
    if (this.props.styleTheme === 'light') {
      return styles.lineLight;
    }
    return styles.lineDark;
  }

  public render() {
    return (
      <div className={styles.letter}>
        <input
          type="checkbox"
          className={styles.marker}
          checked={this.props.checked}
          onChange={this.handleCheckbox}
        />

        <p className={`${styles.author} ${this.convertReadProp()} ${this.textTheme()}`}>{this.props.author}</p>

        <p className={`${styles.theme} ${this.convertReadProp()} ${this.textTheme()}`} onClick={this.open}>
          {this.props.theme}
        </p>

        <p className={styles.date}>{this.props.date}</p>

        {this.props.authorImage}

        {this.unreadMarker()}

        <div className={`${styles.line} ${this.lineTheme()}`} />
      </div>
    );
  }
}
