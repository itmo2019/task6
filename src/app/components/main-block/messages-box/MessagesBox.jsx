import React from 'react';
import styles from './MessagesBox.module.css';
import { Message } from './message/Message';
import { HiddenBox } from './hidden-box/HiddenBox';

export class MessagesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      opened: false
    };
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  openMessage(message) {
    this.setState({ opened: true, messageText: message });
  }

  closeMessage() {
    this.setState({ opened: false });
  }

  render() {
    return (
      <div>
        {this.state.opened === true ? (
          <HiddenBox closeMessage={this.closeMessage} messageText={this.state.messageText} />
        ) : (
          <div className={styles['messages-box']}>
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
