import React from 'react';

import styles from './menu.module.css';

function MenuItem({title}: {title: string}) {
    return <li className={styles['item']}>{title}</li>
}

function Menu() {
    return  <ul className={styles['menu']}>
                <li className={styles['write-mail']} id="write-mail">Написать</li>
                <MenuItem title="Входящие"      />
                <MenuItem title="Отправленные"  />
                <MenuItem title="Удаленные"     />
                <MenuItem title="Спам"          />
                <MenuItem title="Черновики"     />
                <MenuItem title="Создать папку" />
            </ul>
}

export default Menu;
