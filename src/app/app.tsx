import * as React from 'react';

import styles from './app.module.css';
import { Top } from './components/top/top';
import { Main } from './components/main/main';

interface IState {
  nightMode: boolean;
  query: string;
}

export class App extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      nightMode: false,
      query: '',
    };
    this.switchMode = this.switchMode.bind(this);
    this.newQuery = this.newQuery.bind(this);
  }

  private newQuery(q: string) {
    this.setState({
      query: q
    });
  }

  private switchMode() {
    this.setState(state => {
        return { nightMode: !state.nightMode };
      }
    );
  }

  public render() {
    const nightMode = this.state.nightMode;
    const appColor = nightMode ? styles.night : styles.day;
    return (
      <div className={appColor}>
        <Top
          nightMode={nightMode}
          newQuery={this.newQuery}
          switchMode={this.switchMode}
        />
        <Main
          nightMode={nightMode}
          query={this.state.query}
        />
      </div>
    );
  }
}
