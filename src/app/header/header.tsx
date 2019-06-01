import React, { Component } from 'react';

const styles = require('./Header.module.css');
import { MenuIcon } from './menuIcon';
import { SearchField } from './searchField';
import { Logo } from './logo';

interface IHeaderProps {
  searchValue: string;
  onSearchChange: (a: string)=>void;
  clearSearchValue: ()=>void;
}

export class Header extends Component<IHeaderProps, {}> {
  render() {
    return (
      <header className={styles.header}>
        <MenuIcon />
        <Logo />
        <SearchField
          searchValue={this.props.searchValue}
          onSearchChange={this.props.onSearchChange}
          clearSearchValue={this.props.clearSearchValue}
        />
      </header>
    );
  }
}
