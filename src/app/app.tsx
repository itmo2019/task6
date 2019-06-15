import *as React from 'react';

import styles from './app.module.css';
import { Header } from './header';
import { MailInnerContent } from './mailInnerContent';

interface IState {
  isDark: boolean;
}

export class App extends React.Component {
  public readonly state: IState;

  constructor(props: {}) {
    super(props);
    this.state = {
      isDark: false,
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  private changeTheme() {
    this.setState((state: IState) => {
      document.body.style.background = state.isDark ? '#e5eaf0' : 'black';
      return { isDark: !state.isDark };
    });
  }

  render() {
    return (
      <div className={styles.app}>
        <MailInnerContent changeTheme={this.changeTheme} isDark={this.state.isDark}/>
      </div>
    );
  }
}
