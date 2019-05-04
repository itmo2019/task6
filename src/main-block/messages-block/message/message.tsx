import React from 'react';

import './message.css';
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
      (this.props.message.unshrink ? ' unshrink' : '') +
      (this.props.message.shrink ? ' shrink' : '');
    return (
      <div id={this.props.message.id.toString()} className={`message${classAddition}`}>
        <label
          className="select-message__checkbox-label"
          htmlFor={`checkbox-${this.props.message.id}`}
        >
          <input
            role="checkbox"
            aria-checked={this.props.message.selected}
            aria-label={'Выделить текущее сообщение'}
            checked={this.props.message.selected}
            type="checkbox"
            className="select-message__checkbox checkbox"
            id={`checkbox-${this.props.message.id}`}
            onChange={event => {
              event.nativeEvent.stopImmediatePropagation();
              this.props.selectCheckbox(this.props.messageIndex);
            }}
          />
        </label>

        <button
          type="button"
          className="message-container"
          aria-label={'Сообщение от ' + this.props.message.senderName +
          '. Тема: ' + this.props.message.subject +
          '. Дата: ' + this.props.message.date +
          '. Кнопка - открыть текущее сообщение'}
          onClick={() => {
            this.props.openMessage(this.props.message);
          }}
        >
          <div className="message-info__sender-logo">{this.props.message.senderLogo}</div>
          <div className="message-info__sender bold">{this.props.message.senderName}</div>
          <div className="message-info__mark unread-mark"/>
          <div className="message-info__subject bold">{this.props.message.subject}</div>
          <div className="message-info__date-container">
            <div className="date-container__date">{this.props.message.date}</div>
          </div>
        </button>
      </div>
    );
  }
}

export default Message;
