import React, { Component } from 'react';

import { Header } from './header/header';
import { BlockInner } from './block-inner/block-inner';
import { Theme, ThemeProvider } from './theme-context'

import './app.css';

interface IAppState {
  theme: Theme
}

export class App extends Component<{}, IAppState> {

  constructor(props: IAppState) {
    super(props);
    this.state = {
      theme: Theme.light
    }
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.setState(state => ({
      theme:
        state.theme === Theme.night
          ? Theme.light
          : Theme.night
    }));
    // console.log(this.state);
  }

  render() {
    return (
      <ThemeProvider value={this.state.theme}>
        <div className="app">
          <header className="app-header">
            <Header changeMode={this.changeMode} />
            <BlockInner />
          </header>
        </div>
      </ThemeProvider>
    );
  }
}
