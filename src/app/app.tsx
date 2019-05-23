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
}

export class App extends Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = { theme: 'light' };
    this.changeTheme = this.changeTheme.bind(this);
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

  public render() {
    return (
      <div className={`main ${this.state.theme}`}>
        <Logo theme={this.state.theme}/>
        <Menu theme={this.state.theme}/>
        <Writebox theme={this.state.theme}/>
        <Search theme={this.state.theme}/>
        <ThemeSwitch changeTheme={this.changeTheme} />
        <Letters theme={this.state.theme}/>
      </div>
    );
  }
}
