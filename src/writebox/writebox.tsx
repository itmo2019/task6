import React, { Component } from 'react';

import styles from './Writebox.module.css';

interface IProps {
  theme: string;
}

export default class Writebox extends Component<IProps, {}> {
  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }


  public render() {
    return (
      <div className={`${styles.writebox} ${this.getTheme()}`}>
        <p className={styles.write}>Написать</p>
      </div>
    );
  }
}
