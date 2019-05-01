import React, { Component } from 'react';

import styles from './App.module.css';
import { Header } from '../header';
import { MainMenu } from '../main-menu';
import { MailFrame } from '../mail-frame';

export class App extends Component {
  public render() {
    return (
      <div>
        <Header className={styles.AppHeader} />
        <MainMenu className={styles.AppMainMenu} />
        <MailFrame className={styles.AppMailFrame} />
      </div>
    );
  }
}
