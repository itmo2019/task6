import React from 'react';

import './menu.css';

function Menu() {
  return (
    <a className="header__menu" href="/" onClick={() => window.event.preventDefault()}>
      <div className="menu__stripe" />
      <div className="menu__stripe" />
      <div className="menu__stripe" />
    </a>
  );
}

export default Menu;
