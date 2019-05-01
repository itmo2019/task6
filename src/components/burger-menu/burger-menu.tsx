import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './BurgerMenu.module.css';

interface IBurgerMenuProps {
  className?: string;
}

export class BurgerMenu extends Component<IBurgerMenuProps> {
  public render() {
    return (
      <div className={classNames(styles.BurgerMenu, this.props.className)}>
        <div className={styles.BurgerMenu__Rect} />
        <div className={styles.BurgerMenu__Rect} />
        <div className={styles.BurgerMenu__Rect} />
      </div>
    );
  }
}
