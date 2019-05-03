import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './app.module.css';
import Header from '../header/index';
import MailBox from '../mail-box/index';
import AsideMenu from '../aside-menu/index';
import {THEME, ThemeContext, ThemeProvider} from "../../theme/theme-context";

const b = bemify('app', styles);

interface State {
  theme: THEME;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      theme: THEME.light
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    this.setState(state => ({
      theme:
        state.theme === THEME.dark
          ? THEME.light
          : THEME.dark,
    }));
  }

  render(): React.ReactNode {
    const { theme } = this.state;

    return (
      <ThemeProvider value={this.state.theme}>
        <div className={b({theme: theme})}>
          <div className={b('header')}>
            <Header changeTheme={this.changeTheme} />
          </div>
          <div className={b('aside-menu')}>
            <AsideMenu />
          </div>
          <div className={b('mail-box')}>
            <MailBox />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

App.contextType = ThemeContext;

export default App;
