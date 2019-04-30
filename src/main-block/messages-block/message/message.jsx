import React from 'react';

import './message.css';

class Message extends React.Component {
  render() {
    const classAddition =
      (this.props.message.toCreate ? ' to-create' : '') +
      (this.props.message.toDelete ? ' to-delete' : '');
    return (
      <div id={this.props.message.id} className={`message${classAddition}`}>
        <label
          className="select-message__checkbox-label"
          htmlFor={`checkbox-${this.props.message.id}`}
        >
          <input
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
          onClick={() => {
            this.props.openMessage(this.props.message);
          }}
        >
          <div className="message-info__sender-logo">{this.props.message.senderLogo}</div>
          <div className="message-info__sender bold">{this.props.message.senderName}</div>
          <div className="message-info__mark unread-mark" />
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
