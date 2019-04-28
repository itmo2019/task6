import React from 'react';

import styles from './menu.module.css';
import { ThemeContext, IThemeContext } from '../app/app';

function MenuItem({title, theme}: {title: string, theme: boolean}) {
    return <li className={styles['item'] + (theme ? ' ' + styles['item_dark-theme'] : '')}>{title}</li>
}

function Menu() {
    return <ThemeContext.Consumer>{ (context: IThemeContext) =>
                <ul className={styles['menu']}>
                    <li className={styles['write-mail'] + (context.value ? ' ' + styles['write-mail_dark-theme'] : '')} id="write-mail">Написать</li>
                    <MenuItem title="Входящие"      theme={context.value} />
                    <MenuItem title="Отправленные"  theme={context.value} />
                    <MenuItem title="Удаленные"     theme={context.value} />
                    <MenuItem title="Спам"          theme={context.value} />
                    <MenuItem title="Черновики"     theme={context.value} />
                    <MenuItem title="Создать папку" theme={context.value} />
                </ul>
           }</ThemeContext.Consumer>
}

export default Menu;
