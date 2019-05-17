import React from 'react';
import styles from './Message.module.css';
import {IMessage} from "../../../../app";

interface IProps {
    messageData: IMessage
    checkboxHandler: (id: string) => void
    openMessage: (message: string) => void
}

export class Message extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const messageID = e.target.id;
    this.props.checkboxHandler(messageID);
  }

  render() {
    const { messageData } = this.props;
    const animation =
      (messageData.toCreate ? ` ${styles['to-create']}` : '') +
      (messageData.toDelete ? ` ${styles['to-delete']}` : '');
    return (
      <div
        onKeyPress={undefined}
        role="button"
        aria-hidden
        className={`${styles.message}${animation} ${messageData.display ? {} : styles["to-hide"]}`}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          if ((event.target as HTMLInputElement).className !== styles.checkbox) {
            this.props.openMessage(messageData.text);
          }
        }}
      >
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={messageData.isChecked}
          id={messageData.id}
          onChange={this.handleChange}
        />
        <div className={styles['sender-img']}>{messageData.firstLetterSender}</div>
        <div className={styles.sender}>{messageData.sender}</div>
        <span className={styles['unread-circle']} />
        <div className={styles.theme}>{messageData.theme}</div>
        <div className={styles.date}>{messageData.date.toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' })}</div>
      </div>
    );
  }
}
