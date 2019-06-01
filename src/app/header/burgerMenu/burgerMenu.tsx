import *as React from 'react';

import styles from './burgerMenu.module.css';

interface IProps {
  isDark: boolean;
}
export class BurgerMenu extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <div className={styles.burgerMenu}>
        <div className={this.props.isDark ? styles.burgerMenu__line_dark : styles.burgerMenu__line} />
        <div className={this.props.isDark ? styles.burgerMenu__line_dark : styles.burgerMenu__line} />
        <div className={this.props.isDark ? styles.burgerMenu__line_dark : styles.burgerMenu__line} />
      </div>
    );
  }
}
