import React from 'react';
import styles from './MenuItems.module.css';
import {ThemeContext, themes} from "../../../../theme/theme-context";

export class MenuItems extends React.Component {
  createMenuItem = (name: string, fontStyle: string, itemStyle: string) => {
    return (
      <li className={itemStyle}>
        <a className={`${styles.link} ${fontStyle}`} href="#name">
          {name}
        </a>
      </li>
    );
  };

  render() {
    const menuItemsNames = ['Отправленные', 'Удаленные', 'Спам', 'Черновики', 'Создать папку'];
    const theme = this.context;
    const fontStyle = theme === themes.light ? styles["font-light"] : styles["font-dark"];
    const itemActiveStyle = theme === themes.light ? styles["item_active-light"] : styles["item-active-dark"];
    const itemStyle = theme === themes.light ? styles["item-light"] : styles["item-dark"];
    return (
      <ul className={styles.items}>
        <li className={`${itemStyle} ${itemActiveStyle}`}>
          <a className={`${styles.link} ${fontStyle}`} href="#incomeMessages">
            Входящие
          </a>
        </li>
        {menuItemsNames.map(name => this.createMenuItem(name, fontStyle, itemStyle))}
      </ul>
    );
  }
}

MenuItems.contextType = ThemeContext;
