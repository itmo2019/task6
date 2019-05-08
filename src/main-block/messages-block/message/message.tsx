import React from 'react';

import styles from './message.module.css';
import { MessageInterface } from '../../../app';

interface InjectedProps {
  message: MessageInterface;
  openMessage: (message: MessageInterface) => void;
  selectCheckbox: (messageIndex: number) => void;
  messageIndex: number;
  key: number;
}

class Message extends React.Component<InjectedProps> {
  render() {
    const classAddition =
      (this.props.message.unshrink ? 'unshrink' : '') +
      (this.props.message.shrink ? 'shrink' : '');
    return (
      <div id={this.props.message.id.toString()} className={styles['message'] + " " + styles[classAddition]}>
        <label
          className={styles['select-message__checkbox-label']}
          htmlFor={`checkbox-${this.props.message.id}`}
        >
          <input
            role="checkbox"
            aria-checked={this.props.message.selected}
            aria-label={'Выделить текущее сообщение'}
            checked={this.props.message.selected}
            type="checkbox"
            className={styles['select-message__checkbox'] + " " + styles['checkbox']}
            id={`checkbox-${this.props.message.id}`}
            onChange={event => {
              event.nativeEvent.stopImmediatePropagation();
              this.props.selectCheckbox(this.props.messageIndex);
            }}
          />
        </label>

        <button
          type="button"
          className={styles['message-container']}
          aria-label={'Сообщение от ' + this.props.message.senderName +
          '. Тема: ' + this.props.message.subject +
          '. Дата: ' + this.props.message.date +
          '. Кнопка - открыть текущее сообщение'}
          onClick={() => {
            this.props.openMessage(this.props.message);
          }}
        >
          <div className={styles['message-info__sender-logo']}>{this.props.message.senderLogo}</div>
          <div className={styles['message-info__sender'] + " " + styles.bold}>{this.props.message.senderName}</div>
          <div className={styles['message-info__mark'] + " " + styles['unread-mark']}/>
          <div className={styles['message-info__subject'] + " " + styles.bold}>{this.props.message.subject}</div>
          <div className={styles['message-info__date-container']}>
            <div className={styles['date-container__date']}>{this.props.message.date}</div>
          </div>
        </button>
      </div>
    );
  }
}

export default Message;
