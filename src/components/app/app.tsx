import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import styles from './App.module.css';
import { Header } from '../header';
import { MainMenu } from '../main-menu';
import { MailFrame } from '../mail-frame';

export class App extends Component {
  public render() {
    return (
      <div>
        <Helmet>
          <base href="/" />
          <title>Яндекс.Почта</title>
          <link
            // rel="stylesheet"
            type="text/css"
            href="/node_modules/dialog-polyfill/dist/dialog-polyfill.css"
          />
          <script type="text/jsx" src="/node_modules/dialog-polyfill/dist/dialog-polyfill.js" />
        </Helmet>

        <Header className={styles.AppHeader} />
        <MainMenu className={styles.AppMainMenu} />
        <MailFrame className={styles.AppMailFrame} />
      </div>
    );
  }
}
