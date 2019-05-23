import React, { Component } from 'react';

import styles from './menuButtons.module.css';
import { MenuButton } from './button/menuButton';

export class MenuButtons extends Component {
  public render() {
    return (
      <ul className={styles.menuButtons}>
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
