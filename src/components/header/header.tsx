import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import Hamburger from '../hamburger/index';
import Logo from '../logo/index';
import Search from '../search/index';
import styles from './header.module.css';

const b = bemify('header', styles);

class Header extends Component {
  render(): React.ReactNode {
    return (
      <header>
        <div className={b('hamburger')}>
          <Hamburger />
        </div>
        <Logo />
        <Search />
      </header>
    );
  }
}

export default Header;
