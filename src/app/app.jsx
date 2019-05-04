import React, { Component } from 'react';

import './app.css';
import Name from '../name/name';
import ThreeLines from '../three-lines/three-lines';
import Menu from '../menu/menu';
import Writebox from '../writebox/writebox';
import Search from '../search/search';
import Letters from '../letters/letters';

export class App extends Component {
  render() {
    return (
      <div className="main">
        <Name />
        <ThreeLines />
        <Menu />
        <Writebox />
        <Search />
        <Letters />
      </div>
    );
  }
}
