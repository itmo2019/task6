import React from 'react';
import styles from './Message.module.css';

export class Message extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
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
        onKeyPress=""
        role="button"
        aria-hidden
        className={`${styles.message}${animation}`}
        onClick={event => {
          if (event.target.className !== styles.checkbox) {
            this.props.openMessage(messageData.text);
          }
        }}
        style={messageData.display ? {} : { display: 'none' }}
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
        <div className={styles.date}>{messageData.date}</div>
      </div>
    );
  }
}
