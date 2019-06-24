import React, { Component } from 'react';
import classNames from 'classnames';

import letter from './letter.module.css';
import opened from './mail-opened.module.css';
import animation from '../css/animation.module.css';
import { ThemeContext, Theme } from '../theme-context';

interface ILetterProps {
  sender: string;
  message: string;
  id: number;
  openedId: number;
  date: string;
  formatedDate: string;
  text: string;
  checked: boolean;
  displayed: Set<number>;

  closeLetter: (id: number) => void;
  openLetter: (id: number) => void;
  changeChecking: (id: number) => void;
}

interface ILetterState {
  added: boolean;
  deletingRight: boolean;
  deletingLeft: boolean;
}

export class Letter extends Component<ILetterProps, ILetterState> {
  private readonly sender: string;

  private readonly message: string;

  private readonly text: string;

  private readonly id: number;

  private readonly date: string;

  private readonly formatedDate: string;

  constructor(props: ILetterProps) {
    super(props);
    this.sender = props.sender;
    this.message = props.message;
    this.text = props.text;
    this.id = props.id;
    this.date = props.date;
    this.formatedDate = props.formatedDate;

    this.state = {
      added: false,
      deletingRight: false,
      deletingLeft: false
    };

    setTimeout(
      () =>
        this.setState(() => ({
          added: true
        })),
      20
    );
    this.openLetter = this.openLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
    this.changeChecking = this.changeChecking.bind(this);
    this.deleting = this.deleting.bind(this);
  }

  deleting() {
    if (Math.random() > 0.5) {
      this.setState(() => ({
        deletingRight: true
      }));
    } else {
      this.setState(() => ({
        deletingLeft: true
      }));
    }
  }

  closeLetter() {
    this.props.closeLetter(this.id);
  }

  openLetter() {
    this.props.openLetter(this.id);
  }

  changeChecking() {
    this.props.changeChecking(this.id);
  }

  render() {
    let theme = this.context;
    let fl = false;
    if (theme === Theme.night) {
      fl = true;
    }
    return (
      <label>
        <div
          className={classNames(
            fl ? letter.night : '',
            letter.letters__letter,
            letter.letter,
            animation['msg-adding-start'],
            this.props.displayed.has(this.id) ? '' : 'hidden',
            this.state.added ? animation['msg-adding-finish'] : '',
            this.state.deletingRight ? animation['msg-deleting-right'] : '',
            this.state.deletingLeft ? animation['msg-deleting-left'] : ''
          )}
        >
          <input className={letter.letter__choose} type="checkbox" onClick={this.openLetter} />
          <div
            className={classNames(letter['letter__mail-opened'], fl ? opened.night : '')}
            id={`${this.props.openedId === this.id ? letter.letter__choose : ''}`}
          >
            <label className={opened['mail-opened__close2']} onClick={this.closeLetter}>
              ×
            </label>
            <div className={opened['mail-opened__text']}>{this.text}</div>
          </div>
          <input
            checked={this.props.checked}
            type="checkbox"
            onChange={this.changeChecking}
            className={letter.letter__checkbox}
          />
          <div className={classNames(letter.letter__pic, letter.letter__unread)}>
            {this.sender[0]}
          </div>
          <span className={classNames(letter.letter__sender, letter.letter__unread)}>
            {this.sender}
          </span>
          <div className={classNames(letter['letter__msg-mark'], letter['letter__mark-unread'])} />
          <span className={classNames(letter.letter__message, letter.letter__unread)}>
            {this.message}
          </span>
          <time className={letter['letter__date-msg']} dateTime={this.formatedDate}>
            {this.date}
          </time>
        </div>
      </label>
    );
  }
}

Letter.contextType = ThemeContext;
