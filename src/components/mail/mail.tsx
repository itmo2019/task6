import React from 'react';

import MailTitle from '../mail-title';
import MailArticle from '../mail-article';

import { IMail } from '../mails-maintenance/mails-maintenance'

import styles from './mail.module.css';
import { ThemeContext, IThemeContext } from '../app/app';

function Mail(props: IMail) {
    const className = styles['mail']
    const className0 = ' ' + styles['mail_dark-theme']
    return  <ThemeContext.Consumer>{(context: IThemeContext) => 
                <div className={className + (context.value ? className0 : '')} key={props.mailID}>
                    <input className={styles['checkbox']} id={props.mailID} type="checkbox" />
                    <div className={styles['mail-title-wrapper']}>
                        <MailTitle {...props} />
                    </div>
                    <div className={styles['mail-article-wrapper']}>
                        <MailArticle mailID={props.mailID} body={props.article} />
                    </div>
                </div>
            }</ThemeContext.Consumer>
}

export default Mail
