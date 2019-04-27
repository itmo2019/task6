import React from 'react';

import MailTitle from '../mail-title';
import MailArticle from '../mail-article';

import { IMail } from '../mails-maintenance/mails-maintenance'

import styles from './mail.module.css';

function Mail(props: IMail) {
    return  <div className={styles['mail']} key={props.mailID}>
                <input className={styles['checkbox']} id={props.mailID} type="checkbox" />
                <div className={styles['mail-title-wrapper']}>
                    <MailTitle {...props} />
                </div>
                <div className={styles['mail-article-wrapper']}>
                    <MailArticle mailID={props.mailID} body={props.article} />
                </div>
            </div>
}

export default Mail
