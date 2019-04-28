import React from 'react';

import mail_cross from './mail_cross.png';
import mail_cross0 from './mail_cross0.png';

import styles from './mail-article.module.css';
import { ThemeContext, IThemeContext } from '../app/app';

function MailsArticle({mailID, body}: {mailID: string, body: JSX.Element}) {
    const className = styles['cross']
    const className0 = ' ' + styles['cross_dark-theme']
    return  <ThemeContext.Consumer>{(context: IThemeContext) => 
                <article className={styles['mail-article']}>
                    <label className={className + (context.value ? className0 : '')} htmlFor={mailID}>
                        <img src={context.value ? mail_cross0 : mail_cross} alt="quiting cross" width="18px" height="18px" />
                    </label>
                    {body}
                    <footer className={styles['clearfix']}></footer> 
                </article>
            }</ThemeContext.Consumer>
}

export default MailsArticle;
