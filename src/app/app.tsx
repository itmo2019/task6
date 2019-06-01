import * as React from 'react';

import styles from './app.module.css';
import { Header } from './header';
import { Main } from './main';

interface IState {
  isDark: boolean;
  searchText: string;
}

export class App extends React.Component {
  public readonly state: IState;

  constructor(props: {}) {
    super(props);

    this.state = {
      searchText: '',
      isDark: false,
    };
    this.changeTheme = this.changeTheme.bind(this);
    this.searchFunction.bind(this);
  }

  public searchFunction = (text: string) => {
    this.setState({
      searchText: text
    });
  };

  private changeTheme() {
    this.setState((state: IState) => {
      document.body.style.background = state.isDark ? '#e5eaf0' : 'black';
      return { isDark: !state.isDark };
    });
  }

  render() {
    return (
      <div className={styles.app}>
        <Header searchFunction={this.searchFunction} isDark={this.state.isDark} changeTheme={this.changeTheme}/>
        <Main searchText={this.state.searchText} isDark={this.state.isDark}/>
      </div>
    );
  }
}
