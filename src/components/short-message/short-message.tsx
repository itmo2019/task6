import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './ShortMessage.module.css';
import avatar from '../../resources/img/yandex-logo.png';

interface IShortMessage {
  avatar?: string;
  sender?: string;
  topic?: string;
  date?: string;
  handleClick: () => void;
  handleTick: () => void;
  className?: string;
  fadeOut?: boolean;
  isTicked?: boolean;
}

export interface IShortMessageState {
  isVisible: boolean;
  wasRead: boolean;
}

export class ShortMessage extends Component<IShortMessage, IShortMessageState> {
  public constructor(props: IShortMessage) {
    super(props);
    this.avatar = props.avatar === undefined ? avatar : props.avatar;
    this.sender = props.sender === undefined ? 'Яндекс.Почта' : props.sender;
    this.topic = props.topic === undefined ? 'Доступ к аккаунту восстановлен' : props.topic;
    this.date =
      props.date === undefined
        ? new Date()
            .toLocaleDateString('ru-RU', {
              day: 'numeric',
              month: 'short'
            })
            .toString()
        : props.date;
    this.state = {
      isVisible: true,
      wasRead: false
    };
    this.handleClick = props.handleClick;
    this.handleTick = props.handleTick;
  }

  private readonly avatar: string;

  private readonly sender: string;

  private readonly topic: string;

  private readonly date: string;

  private readonly handleClick: () => void;

  private readonly handleTick: () => void;

  public render() {
    const fade = this.props.fadeOut ? styles.FadeOut : '';
    const isDisplayed = this.state.isVisible ? '' : styles.ShortMessage_NonDisplayed;
    const wasRead = this.state.wasRead ? '' : styles.ShortMessage_Unread;
    return (
      <div className={classNames(styles.ShortMessage, this.props.className, isDisplayed, fade)}>
        <input
          className={styles.ShortMessage__Checkbox}
          type="checkbox"
          onClick={this.handleTick}
        />
        <img
          className={styles.ShortMessage__Avatar}
          src={this.avatar}
          alt="Я"
          onClick={this.handleClick}
          role="presentation"
        />
        <div className={styles.ShortMessage__Sender} onClick={this.handleClick} role="presentation">
          <span className={classNames(styles.ShortMessage__Text, wasRead)}>{this.sender}</span>
        </div>
        <div className={classNames(styles.ShortMessage__UnreadDot, wasRead)} />
        <div className={styles.ShortMessage__Topic} onClick={this.handleClick} role="presentation">
          <span className={classNames(styles.ShortMessage__Text, wasRead)}>{this.topic}</span>
        </div>
        <div className={styles.ShortMessage__Date} onClick={this.handleClick} role="presentation">
          <span className={classNames(styles.ShortMessage__Text, wasRead)}>{this.date}</span>
        </div>
      </div>
    );
  }
}
