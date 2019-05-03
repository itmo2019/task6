import React from 'react';

import './search-bar.css';

function SearchBar() {
  return <label>
    <input type="search" className="header__search-bar" placeholder="Поиск"/>
  </label>;
}

export default SearchBar;
