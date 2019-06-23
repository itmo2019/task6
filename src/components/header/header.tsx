import React, { Component } from 'react';

import styles from './Header.module.css';
import { MenuIcon } from '../menu-icon';
import { SearchField } from '../search-field';
import { Logo } from '../logo';

interface IHeaderProps {
  searchValue: string;
  onSearchChange: (a: string) => void;
  clearSearchValue: () => void;
}

export class Header extends Component<IHeaderProps, {}> {
  public render() {
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
