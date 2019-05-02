import React from 'react';
import './MessagesBox.css';
import { Message } from './message/Message';

export class MessagesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      opened: false
    };
    this.openMessage = this.openMessage.bind(this);
  }

  openMessage(message) {
    this.setState({ opened: true, messageText: message });
  }

  render() {
    return (
      <div>
        {this.state.opened === true ? (
          <div className="hidden-box">
            <div
              onKeyPress=""
              role="button"
              aria-hidden
              className="hidden-box__cancel-btn"
              onClick={() => {
                this.setState({ opened: false });
              }}
            >
              X
            </div>
            <div className="hidden-box__content">{this.state.messageText}</div>
          </div>
        ) : (
          <div className="messages-box">
            {this.props.messages.map(messageData => (
              <Message
                key={messageData.id}
                messageData={messageData}
                openMessage={this.openMessage}
                checkboxHandler={this.props.checkboxHandler}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
