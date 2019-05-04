import React from 'react';
import styles from './MainBlock.module.css';
import { TopBar } from './top-bar/TopBar';
import { Footer } from './footer/Footer';
import { MessagesBox } from './messages-box/MessagesBox';
import { IMessage } from "../../app";
import { ThemeContext, themes } from "../../../theme/theme-context";

interface PropsType {
    topBarCheckboxHandler: (isChecked: boolean) => void
    deleteMessages: () => void
    checkboxHandler: (id: string) => void
    messages: IMessage[]
}

export class MainBlock extends React.Component<PropsType> {
  render() {
    const theme = this.context;
    const colorStyle = theme === themes.light ? styles.light : styles.dark;
    return (
      <div className={`${styles['main-block']} ${colorStyle}`}>
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

MainBlock.contextType = ThemeContext;
