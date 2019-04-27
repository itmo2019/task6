import React from 'react';

import mail_cross from './mail_cross.png';

import styles from './mail-article.module.css';

function MailsArticle({mailID, body}: {mailID: string, body: JSX.Element}) {
    return  <article className={styles['mail-article']}>
                <label className={styles['cross']} htmlFor={mailID}>
                    <img src={mail_cross} alt="quiting cross" width="18px" height="18px" />
                </label>
                {body}
                <footer className={styles['clearfix']}></footer> 
            </article>
}

export default MailsArticle;
