import *as React from 'react';

import styles from './menuButtons.module.css';
import { MenuButton } from './button/menuButton';

export class MenuButtons extends React.Component {
  render() {
    return (
      <ul className={styles.leftMenu__actionsBlock}>
        <MenuButton name="Входящие" />
        <MenuButton name="Отправленные" />
        <MenuButton name="Удаленные" />
        <MenuButton name="Спам" />
        <MenuButton name="Черновики" />
        <MenuButton name="Создать папку" />
      </ul>
    );
  }
}
