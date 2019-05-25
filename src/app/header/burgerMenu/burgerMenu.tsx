import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './burgerMenu.module.css';

interface IProps {
  isDark: boolean;
}

export class BurgerMenu extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    const rectangleClassNames = classNames(
      styles.burgerMenu__rectangle,
      this.props.isDark
        ? styles.burgerMenu__rectangle_darkTheme
        : styles.burgerMenu__rectangle_lightTheme
    );
    return (
      <div className={styles.burgerMenu}>
        <div className={rectangleClassNames} />
        <div className={rectangleClassNames} />
        <div className={rectangleClassNames} />
      </div>
    );
  }
}
