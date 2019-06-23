import React, { Component } from 'react';

import './app.css';
import { Header } from './header/Header';
import { Main } from './main/Main';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Main />
      </div>
    );
  }
}
