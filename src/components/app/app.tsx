import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './app.module.css';
import Header from '../header/index';
import MailBox from '../mail-box/index';
import AsideMenu from '../aside-menu/index';

const b = bemify('app', styles);

class App extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <div className={b('header')}>
          <Header />
        </div>
        <div className={b('aside-menu')}>
          <AsideMenu />
        </div>
        <div className={b('mail-box')}>
          <MailBox />
        </div>
      </div>
    );
  }
}

export default App;
