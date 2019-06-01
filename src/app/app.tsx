import React, { Component } from 'react';

import './app.css';
import Menu from '../menu/menu';
import Writebox from '../writebox/writebox';
import Search from '../search/search';
import Letters from '../letters/letters';
import Logo from '../logo/logo';
import ThemeSwitch from '../theme-switch/theme-switch';

interface IState {
  theme: string;
  filter: string;
  filterProcessingDisplay: boolean;
}

export class App extends Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = { theme: 'light', filter: '', filterProcessingDisplay: false };
    this.changeTheme = this.changeTheme.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setFilterProcessingDisplay = this.setFilterProcessingDisplay.bind(this);
  }

  public changeTheme(checkbox: React.ChangeEvent<HTMLInputElement>): void {
    console.log(this.state.theme);
    console.log(checkbox.currentTarget);
    console.log(checkbox.currentTarget.checked);
    const b = checkbox.target.checked;
    this.setState(() => {
      if (b) {
        console.log('kek');
        return {
          theme: 'dark'
        };
      }
      return {
        theme: 'light'
      };
    });
    console.log(this.state.theme);
  }

  private handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    this.setFilterProcessingDisplay(true);
    this.setFilter(event.target.value);
  }

  private setFilter(s: string) {
    this.setState({ filter: s });
  }

  public setFilterProcessingDisplay(display: boolean) {
    console.log('app setFilterProcessingDisplay');
    this.setState({ filterProcessingDisplay: display });
  }

  private removeSearchTextInput(event: React.MouseEvent<HTMLElement, MouseEvent>) {}

  public render() {
    return (
      <div className={`main ${this.state.theme}`}>
        <Logo theme={this.state.theme} />
        <Menu theme={this.state.theme} />
        <Writebox theme={this.state.theme} />
        <Search
          theme={this.state.theme}
          handleFilterChange={this.handleFilterChange}
          removeSearchTextInput={this.removeSearchTextInput}
          display={this.state.filterProcessingDisplay}
        />
        <ThemeSwitch changeTheme={this.changeTheme} />
        <Letters
          theme={this.state.theme}
          filter={this.state.filter}
          setFilterProcessingDisplay={this.setFilterProcessingDisplay}
        />
      </div>
    );
  }
}
