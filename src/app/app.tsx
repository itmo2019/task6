import React, { Component } from 'react';

import styles from './app.module.css';
import { Header } from './header/header';
import { Main } from './main/main';

interface IState {
  searchText: string;
}

export class App extends Component {
  public constructor(props: {}) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.searchFunction.bind(this);
  }

  public readonly state: IState;

  public searchFunction = (text: string) => {
    this.setState({
      searchText: text
    });
  };

  public render() {
    return (
      <div className={styles.app}>
        <Header searchFunction={this.searchFunction} />
        <Main searchText={this.state.searchText} />
      </div>
    );
  }
}
