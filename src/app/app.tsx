import React, { Component } from 'react';

import styles from './app.module.css';
import { Header } from './header/header';
import { Main } from './main/main';

export class App extends Component {
  public render() {
    return (
      <div className={styles.app}>
        <Header />
        <Main />
      </div>
    );
  }
}
