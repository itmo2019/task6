import React from 'react';

import { ICallbacks } from '../mails-header/mails-header'

import styles from './mails-menu.module.css';

function ItemWrapper({id, title, callback}: {id: string, title: string, callback: undefined | (() => void)}) {
    return  <li className={styles['item-wrapper']}>
                <input className={styles['item']} id={id} type="button" value={title} onClick={callback} />
            </li>
}

function MailsMenu({callbacks}: {callbacks: ICallbacks}) {
    return  <ul className={styles['mails-menu']}>
                <ItemWrapper id="forward-button" title="Переслать"       callback={undefined}                />
                <ItemWrapper id="delete-button"  title="Удалить"         callback={callbacks.deleteCallback} />
                <ItemWrapper id="spam-button"    title="Это бан!"        callback={undefined}                />
                <ItemWrapper id="read-button"    title="Прочитано"       callback={undefined}                />
                <ItemWrapper id="read-button"    title="Получить письмо" callback={callbacks.receiveCallback}/>
            </ul>
}

export default MailsMenu;
