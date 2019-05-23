import React, { Component } from 'react';

import styles from './ThemeSwitch.module.css';

interface IProps {
  changeTheme(checkbox: React.ChangeEvent<HTMLInputElement>): void;
}

export default class ThemeSwitch extends Component<IProps, {}> {
  public render() {
    return (
      <label className={styles.switch}>
        <input type="checkbox" onChange={this.props.changeTheme} />
        <span className={`${styles.slider} ${styles.round}`} />
      </label>
    );
  }
}
