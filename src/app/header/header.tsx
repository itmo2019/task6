import *as React from 'react';

import styles from './header.module.css';
import { Search } from '../search';
import logo from '../images/header-logo.svg';
import darkLogo from '../images/header-logo-dark.png';

interface IProps {
  isClearInput: boolean;
  search: (text: string) => void;
  changeTheme: () => void;
  isDark: boolean;
}

export class Header extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.header__burgerMenu}>
          <div className={this.props.isDark ? styles.header__line_dark : styles.header__line} />
          <div className={this.props.isDark ? styles.header__line_dark : styles.header__line} />
          <div className={this.props.isDark ? styles.header__line_dark : styles.header__line} />
        </div>
        <img className={styles.header__ypLogo} src={this.props.isDark ? darkLogo : logo} alt="logo" />
        <Search isClearInput={this.props.isClearInput} search={this.props.search}/>
        <button className={styles.header__button} onClick={this.props.changeTheme}>
          <span className={styles.header__textWrite}>Change Theme</span>
        </button>
      </header>
    );
  }
}
