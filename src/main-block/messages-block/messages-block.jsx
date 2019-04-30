import React from 'react';

import './messages-block.css';
import Header from './header/header';
import HiddenMessage from './hidden-message/hidden-message';
import Message from './message/message';
import Footer from './footer/footer';

class MessagesBlock extends React.Component {
  constructor(props) {
    super(props);
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);

    this.state = {
      hiddenMessageText: this.props.hiddenMessageText,
      messageIsOpen: this.props.messageIsOpen
    };
  }

  closeMessage() {
    this.setState({
      messageIsOpen: false
    });
  }

  openMessage(message) {
    this.setState({
      messageIsOpen: true,
      hiddenMessageText: message.hiddenText
    });
  }

  render() {
    const messagesListClassAddition = !this.state.messageIsOpen ? '__open' : '__closed';
    return (
      <div className="messages-block">
        <Header
          handleSelectAll={this.props.handleSelectAll}
          deleteSelected={this.props.deleteSelected}
          selectAllCheckbox={this.props.selectAllCheckbox}
        />
        <HiddenMessage
          closeMessage={this.closeMessage}
          messageIsOpen={this.state.messageIsOpen}
          hiddenMessageText={this.state.hiddenMessageText}
        />
        <div className={`messages-list messages-list${messagesListClassAddition}`}>
          {this.props.messagesList.map((message, messageIndex) => {
            return (
              <Message
                message={message}
                openMessage={this.openMessage}
                selectCheckbox={this.props.selectCheckbox}
                messageIndex={messageIndex}
                key={message.id}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MessagesBlock;
