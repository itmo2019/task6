import React from 'react';

import styles from './mails-footer.module.css';

function Element({title}: {title: string}) {
    return <div className={styles['element']}>{title}</div>
}

function MailsFooter() {
    return  <footer className={styles['mails-footer']}>
                <Element title="Помощь и обратная связь"/>
                <Element title="Реклама"/>
                <Element title="© 2001—2018, Яндекс"/>
            </footer>  
}

export default MailsFooter;
