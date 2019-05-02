import React from 'react';
import './Message.css';

export class Message extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const messageID = e.target.id;
    this.props.checkboxHandler(messageID);
  }

  render() {
    const { messageData } = this.props;
    const animation =
      (messageData.toCreate ? ' to-create' : '') + (messageData.toDelete ? ' to-delete' : '');
    return (
      <div
        onKeyPress=""
        role="button"
        aria-hidden
        className={`message${animation}`}
        onClick={event => {
          if (event.target.className !== 'message__checkbox') {
            this.props.openMessage(messageData.text);
          }
        }}
        style={messageData.display ? {} : { display: 'none' }}
      >
        <input
          className="message__checkbox"
          type="checkbox"
          checked={messageData.isChecked}
          id={messageData.id}
          onChange={this.handleChange}
        />
        <div className="message__sender-img">{messageData.firstLetterSender}</div>
        <div className="message__sender">{messageData.sender}</div>
        <span className="message__unread-circle" />
        <div className="message__theme">{messageData.theme}</div>
        <div className="message__date">{messageData.date}</div>
      </div>
    );
  }
}
