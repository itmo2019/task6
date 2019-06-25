import React, { Component } from 'react';

import styles from './Header.module.css';
import { MenuIcon } from '../menu-icon';
import { SearchField } from '../search-field';
import { IThemeContext, ThemeContext } from '../app';
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
        <ThemeContext.Consumer>
          {(context: IThemeContext) => (
            <div className={styles.themeButtonDiv}>
              <button className={styles.themeButton} onClick={context.switch}>{context.isDarkTheme ? 'dark' : 'light'}</button>
            </div>
          )}
        </ThemeContext.Consumer>
      </header>
    );
  }
}
