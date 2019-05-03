import React from 'react';
import styles from './MainBlock.module.css';
import { TopBar } from './top-bar/TopBar';
import { Footer } from './footer/Footer';
import { MessagesBox } from './messages-box/MessagesBox';
import { IMessage } from "../../app";

interface PropsType {
    topBarCheckboxHandler: (isChecked: boolean) => void
    deleteMessages: () => void
    checkboxHandler: (id: string) => void
    messages: IMessage[]
}

export class MainBlock extends React.Component<PropsType> {
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
