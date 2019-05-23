import React, { Component } from 'react';

import styles from './Name.module.css';
import shape from '../images/Shape.png';

interface IProps {
  theme: string;
}

export default class Name extends Component<IProps, {}> {
  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }

  public render() {
    return (
      <div className={`${styles.name} ${this.getTheme()}`}>
        <img src={shape} alt="Yandex.Mail" />
      </div>
    );
  }
}
