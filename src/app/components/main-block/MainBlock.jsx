import React from 'react';
import styles from './MainBlock.module.css';
import { TopBar } from './top-bar/TopBar';
import { Footer } from './footer/Footer';
import { MessagesBox } from './messages-box/MessagesBox';

export class MainBlock extends React.Component {
  render() {
    return (
      <div className={styles['main-block']}>
        <TopBar
          deleteMessages={this.props.deleteMessages}
          topBarCheckboxHandler={this.props.topBarCheckboxHandler}
        />
        <MessagesBox messages={this.props.messages} checkboxHandler={this.props.checkboxHandler} />
        <Footer />
      </div>
    );
  }
}
