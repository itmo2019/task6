import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './switcher.module.css';

interface IProps {
  changeTheme: () => void;
  isDark: boolean;
}

export class Switcher extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <button
        className={classNames(
          styles.switcher,
          this.props.isDark ? styles.switcher__darkTheme : styles.switcher__lightTheme
        )}
        type="button"
        onClick={this.props.changeTheme}
      >
        <span>switch theme</span>
      </button>
    );
  }
}
