import React from 'react';

import './main-block.css';
import LeftMenu from './left-menu';
import MessagesBlock from './messages-block';
import { MessageInterface } from '../app';

interface InjectedProps {
  handleSelectAll: () => void;
  selectCheckbox: (messageIndex: number) => void;
  deleteSelected: () => void;
  messagesList: MessageInterface[];
  selectAllCheckbox: boolean;
  messagesPerPage: number;
}

class MainBlock extends React.Component<InjectedProps> {
  render() {
    return (
      <div className="mail-page__main-block">
        <LeftMenu />
        <MessagesBlock
          handleSelectAll={this.props.handleSelectAll}
          selectCheckbox={this.props.selectCheckbox}
          deleteSelected={this.props.deleteSelected}
          messagesList={this.props.messagesList}
          selectAllCheckbox={this.props.selectAllCheckbox}
          messagesPerPage={this.props.messagesPerPage}
        />
      </div>
    );
  }
}

export default MainBlock;
