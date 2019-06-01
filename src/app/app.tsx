import React, { Component } from 'react';
import Header from './header/header';
import Main from './main/main';

import './app.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
