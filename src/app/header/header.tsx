import React, { Component } from 'react';

import styles from './header.module.css';
import { BurgerMenu } from './burgerMenu/burgerMenu';
import { SearchInput } from './searchInput/searchInput';
import { HeaderLogo } from './headerLogo/headerLogo';
import { Switcher } from './switcher/switcher';

interface IProps {
  searchFunction: (text: string) => void;
  switchTheme: () => void;
  isDark: boolean;
}

export class Header extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <header className={styles.header}>
        <BurgerMenu />
        <HeaderLogo isDark={this.props.isDark} />
        <SearchInput searchFunction={this.props.searchFunction} isDark={this.props.isDark} />
        <Switcher changeTheme={this.props.switchTheme} />
      </header>
    );
  }
}
