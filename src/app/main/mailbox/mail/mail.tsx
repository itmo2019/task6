import React, { Component } from 'react';

import { Mail as MailType } from '../data';
import { MailBoxState } from '../mailbox'

import styles from './mail.module.css';

interface MailProps {
  mail: MailType;
  onClick: () => void;
  onAnimationEnd: () => void;
}

export class Mail extends Component<MailProps> {
  trigger: React.RefObject<HTMLLabelElement>;

  constructor(props: Readonly<MailProps>) {
    super(props);
    this.trigger = React.createRef();
  }

  render() {
    const { mail, onClick, onAnimationEnd } = this.props;
    const checkboxId = `checkbox_${mail.id}`;

    return (
      <label
        ref={this.trigger}
        htmlFor="mailbox__trigger"
        onClick={onClick}
        role="row"
        tabIndex={0}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            const current = this.trigger.current;
            if (current) {
              current.click();
            }
          }
        }}
      >
        <div
          className={`${styles.mailbox__mail}${!mail.old ? ` ${styles.mail__new}` : ``}`}
          data-state={mail.state}
          onAnimationEnd={onAnimationEnd}
        >
          <label className={styles.checkbox} htmlFor={checkboxId}>
            <input
              type="checkbox"
              className={styles.checkbox__input}
              id={checkboxId}
              checked={mail.checked}
              onChange={event => mail.setCheck(event.target.checked)}
            />
            <span className={styles.checkbox__span} />
          </label>
          <div className={`${styles["mailbox__mail-element"]} ${styles.mail__pic}`}>
            <img className={styles.pic__img} alt="pic" src={mail.img} />
          </div>
          <div className={`${styles["mailbox__mail-element"]} ${styles.mail__author}`}>{mail.author}</div>
          <div className={`${styles["mailbox__mail-element"]} ${styles.mail__dot}`} />
          <div className={`${styles["mailbox__mail-element"]} ${styles.mail__title}`}>{mail.title}</div>
          <time className={`${styles["mailbox__mail-element"]} ${styles.mail__time}`}>{mail.date}</time>
        </div>
      </label>
    );
  }
}

export default Mail;
