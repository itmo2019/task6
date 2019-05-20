import React, { Component } from 'react';

import './app.css';
import { Header } from './structure/header/header';
import { Menu } from './structure/menu/menu';
import { MainContent } from './structure/main-content/mainContent';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
        <MainContent />
      </div>
    );
  }
}
