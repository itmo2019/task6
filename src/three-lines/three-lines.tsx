import React, { Component } from 'react';

import styles from './ThreeLines.module.css';

interface IProps {
  theme: string;
}

export default class ThreeLines extends Component<IProps, {}> {
  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }

  public render() {
    return (
      <section className={styles.lines}>
        <div id="line-1" className={`${styles.line} ${this.getTheme()} ${styles.first}`} />

        <div id="line-2" className={`${styles.line} ${this.getTheme()}`} />

        <div id="line-3" className={`${styles.line} ${this.getTheme()}`} />
      </section>
    );
  }
}
