import React from 'react';

import styles from './messages-block.module.css';
import Header from './header';
import HiddenMessage from './hidden-message';
import Message from './message';
import Footer from './footer';
import { MessageInterface } from '../../app';
import { AutoSizer, List } from 'react-virtualized';

interface InjectedProps {
  handleSelectAll: () => void;
  selectCheckbox: (messageIndex: number) => void;
  deleteSelected: () => void;
  messagesList: MessageInterface[];
  selectAllCheckbox: boolean;
  messagesPerPage: number;
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
    const messagesCount = this.props.messagesList.length < this.props.messagesPerPage ?
      this.props.messagesList.length : this.props.messagesPerPage;
    return (
      <div className={styles['messages-block']} aria-haspopup="true">
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
        <div className="messages-list-container" aria-hidden={this.state.messageIsOpen} aria-live="polite">
          <AutoSizer className={styles['messages-list'] + " " + styles[`messages-list${messagesListClassAddition}`]}>
            {({ height, width }) => (
              <List
                height={height}
                width={width}
                rowCount={messagesCount}
                rowHeight={41}
                rowRenderer={({ index, key, style }) => {
                  return <div key={key} style={style}>
                    <Message
                      message={this.props.messagesList[index]}
                      openMessage={this.openMessage}
                      selectCheckbox={this.props.selectCheckbox}
                      messageIndex={index}
                      key={this.props.messagesList[index].id}
                    />
                  </div>;
                }
                }
              />
            )}
          </AutoSizer>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MessagesBlock;
