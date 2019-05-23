import React, { Component } from 'react';

import styles from './menuButton.module.css';

interface IProps {
  name: string;
}

export class MenuButton extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <li className={styles.menuButtons__button}>
        <a href="#" className={styles.menuButtons__buttonDefaultLink}>
          {this.props.name}
        </a>
      </li>
    );
  }
}
