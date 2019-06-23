import React, { Component } from 'react';

import styles from './MainMenu.module.css';
import utilCss from '../../util/UtilCss.module.css';
import { MainMenuButton } from '../main-menu-button';

interface MainMenuProps {
  createNewMail: () => void;
}

export class MainMenu extends Component<MainMenuProps, any> {
  public render() {
    return (
      <nav className={[styles.mainMenu, utilCss.noselect].join(' ')}>
        <button className={styles.sendButton} onClick={this.props.createNewMail}>
          Написать
        </button>
        <MainMenuButton name="Входящие" />
        <MainMenuButton name="Отправленные" />
        <MainMenuButton name="Удаленные" />
        <MainMenuButton name="Спам" />
        <MainMenuButton name="Черновики" />
        <MainMenuButton name="Создать папку" />
      </nav>
    );
  }
}
