import React from 'react';
import styles from './MessagesBox.module.css';
import { Message } from './message/Message';
import { HiddenBox } from './hidden-box/HiddenBox';
import {IMessage} from "../../../app";
import {ThemeContext, themes} from "../../../../theme/theme-context";

interface IProps {
    messages: IMessage[]
    checkboxHandler: (id: string) => void
}

interface IState {
    messageText: string
    opened: boolean
}

export class MessagesBox extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      messageText: '',
      opened: false
    };
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  openMessage(message: string) {
    this.setState({ opened: true, messageText: message });
  }

  closeMessage() {
    this.setState({ opened: false });
  }

  render() {
      const colorStyle = this.context === themes.light ? styles.light : styles.dark;
    return (
      <div>
        {this.state.opened === true ? (
          <HiddenBox closeMessage={this.closeMessage} messageText={this.state.messageText} />
        ) : (
          <div className={`${styles['messages-box']} ${colorStyle}`}>
            {this.props.messages.map(messageData => (
              <Message
                key={messageData.id}
                messageData={messageData}
                openMessage={this.openMessage}
                checkboxHandler={this.props.checkboxHandler}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

MessagesBox.contextType = ThemeContext;
