import React from 'react';

import styles from './main-block.module.css';
import LeftMenu from './left-menu';
import MessagesBlock from './messages-block';
import { MessageInterface } from '../app';

interface InjectedProps {
  deleteSelected: () => void;
  messagesList: MessageInterface[];
  messagesPerPage: number;
}

class MainBlock extends React.Component<InjectedProps> {
  render() {
    return (
      <div className={styles['mail-page__main-block']}>
        <LeftMenu />
        <MessagesBlock
          deleteSelected={this.props.deleteSelected}
          messagesList={this.props.messagesList}
          messagesPerPage={this.props.messagesPerPage}
        />
      </div>
    );
  }
}

export default MainBlock;
