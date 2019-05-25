import React, { Component } from 'react';

import styles from './headerLogo.module.css';
import logoLightTheme from './images/yandex-mail-logo.svg';
import logoDarkTheme from './images/logo-dark.png';

interface IProps {
  isDark: boolean;
}

export class HeaderLogo extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <a href="https://mail.yandex.ru">
        <img
          className={styles.header__yandexMailLogo}
          src={this.props.isDark ? logoDarkTheme : logoLightTheme}
          alt="logo"
        />
      </a>
    );
  }
}
