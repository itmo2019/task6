import * as React from 'react';

import styles from './header.module.css';
import logo from './images/headerLogo.svg';
import logo_dark from './images/logo-dark.png';
import { BurgerMenu } from './burgerMenu';
import { Search } from './search';

interface IProps {
  changeTheme: () => void;
  isDark: boolean;
  searchFunction: (text: string) => void;
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
        <BurgerMenu isDark={this.props.isDark}/>
        <img className={styles.header__ypLogo} src={this.props.isDark ? logo_dark : logo} alt="logo" />
        <Search searchFunction={this.props.searchFunction}/>
        <button className={styles.header__button} onClick={this.props.changeTheme}>
          <span className={styles.header__textWrite}>Change Theme</span>
        </button>
      </header>
    );
  }
}
