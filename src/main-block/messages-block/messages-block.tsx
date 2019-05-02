import React from 'react';

import './messages-block.css';
import Header from './header';
import HiddenMessage from './hidden-message';
import Message from './message';
import Footer from './footer';
import { MessageInterface } from '../../app';

interface InjectedProps {
  handleSelectAll: () => void;
  selectCheckbox: (messageIndex: number) => void;
  deleteSelected: () => void;
  messagesList: MessageInterface[];
  selectAllCheckbox: boolean;
}

interface State {
  hiddenMessageText: String,
  messageIsOpen: boolean
}

class MessagesBlock extends React.Component<InjectedProps> {
  public state: State;

  constructor(props: InjectedProps) {
    super(props);
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);

    this.state = {
      hiddenMessageText: '',
      messageIsOpen: false
    };
  }

  closeMessage() {
    this.setState({
      messageIsOpen: false
    });
  }

  openMessage(message: MessageInterface) {
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
          {this.props.messagesList.map((message: MessageInterface, messageIndex: number) => {
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
