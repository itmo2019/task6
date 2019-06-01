import React, { Component } from 'react';

import { Mail as MailType } from './../../data';
import { MailBoxState } from './../../mailbox'

import styles from './mail.module.css';

interface MailProps {
  mail: MailType;
  updateState: (genState: (state: MailBoxState) => MailBoxState) => void;
}

export class Mail extends Component<MailProps, any> {
  trigger: React.RefObject<HTMLLabelElement>;

  constructor(props: Readonly<MailProps>) {
    super(props);
    this.trigger = React.createRef();
  }

  render() {
    const { mail, updateState } = this.props;
    const checkboxId = `checkbox_${mail.id}`;

    const animationHandler = () => {
      const mapMailState = (mails: Array<MailType>, newState: string) =>
        mails.map(curMail => {
          if (curMail.id === mail.id) {
            const newMail = curMail;
            newMail.state = newState;
            return newMail;
          }
          return curMail;
        });

      updateState(prevState => {
        const { currentMail, mails } = prevState;
        let newMails = mails;
        if (mail.state === 'appearing') {
          newMails = mapMailState(mails, 'showed');
        }
        if (mail.state === 'collapsed') {
          newMails = mapMailState(mails, 'hidden');
        }
        if (mail.deleted) {
          newMails = mails.filter(curMail => curMail.id !== mail.id);
        }
        return {
          currentMail,
          mails: newMails
        };
      });
    };

    return (
      <label
        ref={this.trigger}
        htmlFor="mailbox__trigger"
        onClick={() => {
          updateState((prevState) => {
            return {
              currentMail: mail.id,
              mails: prevState.mails
            };
          });
        }}
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
          onAnimationEnd={animationHandler}
        >
          <label className={styles.checkbox} htmlFor={checkboxId}>
            <input
              type="checkbox"
              className={styles.checkbox__input}
              id={checkboxId}
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
