import React from 'react';

import './menu.css';

function Menu() {
  return (
    <a className="header__menu" href="/" onClick={() => {
      if (window.event === undefined) {
        // TODO: try 'introduce local variable + addEventListener'
        return;
      }
      return window.event.preventDefault();
    }}>
      <div className="menu__stripe" />
      <div className="menu__stripe" />
      <div className="menu__stripe" />
    </a>
  );
}

export default Menu;
