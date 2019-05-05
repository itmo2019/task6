import * as React from 'react';

import * as styles from './app.module.css';

import { MailHeader } from './components/mailHeader/mail-header';
import { MailBody } from './components/mail-body';

interface IState {
  bLight: boolean;
  searchValue: string;
}

export class App extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.switchTheme = this.switchTheme.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.state = {
      bLight: true,
      searchValue: ''
    };
  }

  public switchTheme() {
    this.setState(state => ({
      bLight: !state.bLight,
      searchValue: state.searchValue
    }));
  }

  public updateSearchInput(newValue: string) {
    this.setState(state => ({
      bLight: state.bLight,
      searchValue: newValue
    }));
  }

  public render() {
    return (
      <div
        className={`${styles.main} ${
          this.state.bLight ? styles.lightBackground : styles.darkBackground
        }`}
      >
        <MailHeader
          bLight={this.state.bLight}
          updateSearchInput={this.updateSearchInput}
          switchTheme={this.switchTheme}
        />
        <MailBody bLight={this.state.bLight} searchValue={this.state.searchValue} />
      </div>
    );
  }
}
