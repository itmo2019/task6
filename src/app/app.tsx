import React, { Component } from 'react';

import './app.css';
import Logo from '../logo';
import Window from '../window';


export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
        </header>
        <Window />
      </div>
    );
  }
}
