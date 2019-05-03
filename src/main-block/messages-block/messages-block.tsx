import React from 'react';

import './messages-block.css';
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
        <div>
          <AutoSizer className={`messages-list messages-list${messagesListClassAddition}`}>
            {({ height, width }) => (
              <List
                height={height}
                width={width}
                rowCount={this.props.messagesList.length}
                rowHeight={41}
                rowRenderer={({ index, key, style }) =>
                  <div key={key} style={style}>
                    <Message
                      message={this.props.messagesList[index]}
                      openMessage={this.openMessage}
                      selectCheckbox={this.props.selectCheckbox}
                      messageIndex={index}
                      key={this.props.messagesList[index].id}
                    />
                  </div>}
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
