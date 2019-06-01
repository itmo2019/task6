import React, { Component } from 'react';

import styles from './app.module.css';
import { Header } from './structure/header/header';
import { Menu } from './structure/menu/menu';
import { MainContent } from './structure/main-content/mainContent';

export interface LetterType {
  key: string;
  id: string;
  // classList: string[];
  text: string[];
  author : string;
  topic : string;
  date : string;
  isChecked: boolean;
  isVisible: boolean;
}


export class App extends Component {
  render() {
    return (
      <div className={styles.body}>
        <Header />
        <Menu />
        <MainContent />
      </div>
    );
  }
}
