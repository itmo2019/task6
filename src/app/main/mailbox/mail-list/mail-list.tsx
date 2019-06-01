import React, { Component } from 'react';
import MailItem from './mail/mail';

import { Mail } from './../data';
import { MailBoxState } from './../mailbox'

import styles from './mail-list.module.css';

interface MailListProps {
  mails: Array<Mail>;
  updateState: (genState: (state: MailBoxState) => MailBoxState) => void;
}

export class MailList extends Component<MailListProps, any> {
  render() {
    const { mails, updateState } = this.props;
    return (
      <div className={styles["mailbox__mail-list"]}>
        {mails.map(mail => (
          <MailItem key={mail.id} mail={mail} updateState={updateState} />
        ))}
      </div>
    );
  }
}

export default MailList;
