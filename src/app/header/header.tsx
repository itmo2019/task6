import React from 'react';
import Hamburger from './hamburger/hamburger';
import Logo from './logo/logo';
import Search from './search/search';

import './header.css';

function Header() {
  return (
    <header>
      <Hamburger />
      <Logo />
      <Search />
    </header>
  );
}

export default Header;
