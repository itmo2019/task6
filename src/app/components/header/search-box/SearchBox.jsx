import React from 'react';
import './SearchBox.css';

export class SearchBox extends React.Component {
  render() {
    return <input className="search-box" type="search" placeholder="Поиск" />;
  }
}
