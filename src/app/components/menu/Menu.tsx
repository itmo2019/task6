import React from 'react';
import styles from './Menu.module.css';
import { MenuItems } from './menu-items/MenuItems';
import {ThemeContext, themes} from "../../../theme/theme-context";

interface IProps {
    newMail: () => void
}

export class Menu extends React.Component<IProps> {
  render() {
      const buttonColorStyle = this.context === themes.light ? styles.light : styles.dark;
    return (
      <div className={styles.menu}>
        <button type="button" className={`${styles.button} ${buttonColorStyle}`}>
          Написать
        </button>
        <MenuItems />
      </div>
    );
  }
}

Menu.contextType = ThemeContext;
