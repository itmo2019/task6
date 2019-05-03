import React from 'react';
import styles from './MenuItems.module.css';

export class MenuItems extends React.Component {
  createMenuItem = (name: string) => {
    return (
      <li className={styles.item}>
        <a className={styles.link} href="#name">
          {name}
        </a>
      </li>
    );
  };

  render() {
    const menuItemsNames = ['Отправленные', 'Удаленные', 'Спам', 'Черновики', 'Создать папку'];
    return (
      <ul className={styles.items}>
        <li className={`${styles.item} ${styles.item_active}`}>
          <a className={styles.link} href="#incomeMessages">
            Входящие
          </a>
        </li>
        {menuItemsNames.map(name => this.createMenuItem(name))}
      </ul>
    );
  }
}
