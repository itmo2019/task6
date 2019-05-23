import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './app.module.css';
import { Header } from './header/header';
import { Main } from './main/main';

interface IState {
  searchText: string;
  isDark: boolean;
}

export class App extends Component {
  public constructor(props: {}) {
    super(props);
    this.state = {
      searchText: '',
      isDark: false
    };
    this.searchFunction.bind(this);
    this.switchTheme.bind(this);
  }

  public readonly state: IState;

  public searchFunction = (text: string) => {
    this.setState({
      searchText: text
    });
  };

  public switchTheme = () => {
    this.setState((state: IState) => {
      return {
        isDark: !state.isDark
      };
    });
  };

  public render() {
    return (
      <div
        className={classNames(
          styles.app,
          this.state.isDark ? styles.app_darkTheme : styles.app_lightTheme
        )}
      >
        <Header
          searchFunction={this.searchFunction}
          switchTheme={this.switchTheme}
          isDark={this.state.isDark}
        />
        <Main searchText={this.state.searchText} isDark={this.state.isDark} />
      </div>
    );
  }
}
