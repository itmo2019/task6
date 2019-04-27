import React from 'react';

import { IMail } from '../mails-maintenance/mails-maintenance'

import styles from './mail-title.module.css';

function MailTitle({callbacks, mailID, classList, avatar, sender, title, date, checked}: IMail) {
    let resAvatar: JSX.Element = <div></div>
    if (avatar) {
        resAvatar = <img src={avatar} alt="avatar" width="30px" height="30px" />;
    }
    const checkboxID: string = mailID + "_checkbox"
    return  <div className={Array.from(classList).map((x: string) => styles[x]).join(" ")}>
                <label className={styles['checkbox-wrapper']} htmlFor={checkboxID}>
                    <input type="checkbox" id={checkboxID} className={styles['checkbox']} 
                        checked={checked} 
                        onChange={() => callbacks.selected(!checked)}/>
                </label>
                <div className={styles['img-wrapper']}>{resAvatar}</div>
                <div className={styles['sender']}>{sender}</div>
                <div className={styles['unread-flag']}></div>
                <label className={styles['title']} htmlFor={mailID}>{title}</label>
                <time className={styles['date']}>{date}</time>
            </div>
}

export default MailTitle;
