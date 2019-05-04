import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import cx from 'classnames';
import MailHeader from '../mailHeader/mailHeader';
import MailMain from '../mailMain/mailMain';

import styles from './mail.module.css';

type State = {
  theme: string,
  filterText: string,
  filterProgress: number
};

const cookies = new Cookies();

export default class Mail extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: this.initTheme(),
      filterText: '',
      filterProgress: 1
    };
  }

  initTheme = () => {
    const curTheme = cookies.get('theme');
    return curTheme === undefined ? 'light' : curTheme;
  };

  handleThemeBtnClick = () => {
    this.setState(state => {
      const theme = state.theme === 'light' ? 'dark' : 'light';
      cookies.set('theme', theme, { path: '/' });
      //cookie.save('theme', theme);
      return { theme };
    });
  };

  changeFilterText = (value: string) => {
    if (value.toLowerCase() === 'темная тема') {
      this.setState({ theme: 'dark' });
    }
    this.setState({ filterText: value });
  };

  clearFilterText = () => {
    this.setState({ filterText: '' });
  };

  changeFilterProgress = (value: number) => {
    this.setState({ filterProgress: value });
  };

  render() {
    console.log('MailApp');
    const { theme, filterText, filterProgress } = this.state;
    const boxClassName = cx(styles.box, styles['box_theme_' + theme]);
    return (
      <div className={boxClassName}>
        <MailHeader theme={theme} filterText={filterText} changeFilterText={this.changeFilterText}
          clearFilterText={this.clearFilterText} onThemeBtnClick={this.handleThemeBtnClick}
          filterProgress={filterProgress} />
        <MailMain theme={theme} filterText={filterText}
                  changeFilterProgress={this.changeFilterProgress}/>
      </div>
    );
  }
}
