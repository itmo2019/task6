import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import Hamburger from '../hamburger/index';
import Logo from '../logo/index';
import Search from '../search/index';
import Toggle from '../toggle/index';
import styles from './header.module.css';

const b = bemify('header', styles);

interface Props {
  changeTheme: () => void
}

class Header extends Component<Props> {
  render(): React.ReactNode {
    return (
      <header className={b()}>
        <div className={b('hamburger')}>
          <Hamburger />
        </div>
        <Logo />
        <Search />
        <div className={b('toggle')}>
          <Toggle changeTheme={this.props.changeTheme}/>
        </div>
      </header>
    );
  }
}

export default Header;
