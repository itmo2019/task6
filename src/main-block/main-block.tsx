import React from 'react';

import styles from './main-block.module.css';
import LeftMenu from './left-menu';
import MessagesBlock from './messages-block';
import { MessageInterface } from '../app';

interface InjectedProps {
  messagesList: MessageInterface[];
  messagesPerPage: number;
  updateList: (newList: MessageInterface[]) => void;
}

class MainBlock extends React.Component<InjectedProps> {
  render() {
    return (
      <div className={styles['mail-page__main-block']}>
        <LeftMenu />
        <MessagesBlock
          messagesList={this.props.messagesList}
          messagesPerPage={this.props.messagesPerPage}
          updateList={this.props.updateList}
        />
      </div>
    );
  }
}

export default MainBlock;
