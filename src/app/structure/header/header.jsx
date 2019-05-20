import React, { Component } from 'react';

import './header.css';
import logo from './images/logo.png';
import { SearchInput } from './searchInput/searchInput';

export class Header extends Component {
  render() {
    return (
      <header className="header clearfix">
        <div className="header__lines">
          <div className="header__line" />
          <div className="header__line" />
          <div className="header__line" />
        </div>
        <div className="header__main-logo">
          <img src={logo} alt="logo" />
        </div>
        <SearchInput />
      </header>
    );
  }
}
