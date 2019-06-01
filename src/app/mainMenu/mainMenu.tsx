import React, { Component } from 'react';

const styles = require('./MainMenu.module.css');
const utilCss = require('util/UtilCss.module.css');
import { MainMenuButton } from './mainMenuButton';

interface MainMenuProps {
  createNewMail: () => void;
}

export class MainMenu extends Component<MainMenuProps, any> {
  render() {
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
