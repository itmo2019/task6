import React from 'react';

import MailsMenu from '../mails-menu';

import styles from './mails-header.module.css';

export interface ICallbacks {
    deleteCallback(): void,
    receiveCallback(): void
}

function MailsHeader({selectCallback, callbacks}: {selectCallback: (x: boolean) => void, callbacks: ICallbacks}) {
    return  <div className={styles['mails-header']}>
                <input type="checkbox" className={styles['checkbox']} id="select-all" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => selectCallback(e.target.checked)} />
                <div className={styles['mails-menu-wrapper']}>
                    <MailsMenu callbacks={callbacks} />
                </div>  
            </div>
}

export default MailsHeader;
