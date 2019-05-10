import React from 'react';

import styles from './messages-block.module.css';
import Header from './header';
import HiddenMessage from './hidden-message';
import Message from './message';
import Footer from './footer';
import { MessageInterface } from '../../app';
import { AutoSizer, List } from 'react-virtualized';

interface InjectedProps {
  messagesList: MessageInterface[];
  messagesPerPage: number;
  updateList: (newList: MessageInterface[]) => void;
}

interface State {
  hiddenMessageText: String,
  messageIsOpen: boolean,
  selectAllCheckbox: boolean,
  messagesList: MessageInterface[]
}

class MessagesBlock extends React.Component<InjectedProps> {
  public state: State;

  constructor(props: InjectedProps) {
    super(props);
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.selectCheckbox = this.selectCheckbox.bind(this);

    this.deleteSelectedMessages = this.deleteSelectedMessages.bind(this);

    this.state = {
      hiddenMessageText: '',
      messageIsOpen: false,
      selectAllCheckbox: false,
      messagesList: this.props.messagesList
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

  handleSelectAll() {
    this.setState((prevState: State) => {
      const newMessagesList = prevState.messagesList;
      for (let i = 0; i < newMessagesList.length; i++) {
        newMessagesList[i].selected = !prevState.selectAllCheckbox;
      }

      return {
        selectAllCheckbox: !prevState.selectAllCheckbox,
        messagesList: newMessagesList
      };
    });
  }

  selectCheckbox(messageIndex: number) {
    this.setState((prevState: State) => {
      const newMessagesList = prevState.messagesList;
      newMessagesList[messageIndex].selected = !newMessagesList[messageIndex].selected;
      return {
        messagesList: newMessagesList
      };
    });
  }

  deleteSelectedMessages() {
    this.setState((prevState: State) => {
      const newMessagesList = prevState.messagesList.filter(message => !message.selected);
      this.props.updateList(newMessagesList);
    });
  }

  render() {
    this.state.messagesList = this.props.messagesList;
    this.state.selectAllCheckbox = this.state.messagesList.some(message => message.selected);

    const messagesListClassAddition = !this.state.messageIsOpen ? '__open' : '__closed';
    const messagesCount = this.props.messagesList.length < this.props.messagesPerPage ?
      this.props.messagesList.length : this.props.messagesPerPage;
    return (
      <div className={styles['messages-block']} aria-haspopup="true">
        <Header
          handleSelectAll={this.handleSelectAll}
          deleteSelected={this.deleteSelectedMessages}
          selectAllCheckbox={this.state.selectAllCheckbox}
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
                className={styles.virtualizedList}
                rowRenderer={({ index, key, style }) => {
                  return <div key={this.props.messagesList[index].id} style={style}>
                    <Message
                      message={this.props.messagesList[index]}
                      openMessage={this.openMessage}
                      selectCheckbox={this.selectCheckbox}
                      messageIndex={index}
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
