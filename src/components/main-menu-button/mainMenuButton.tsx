import React, { Component } from 'react';

import styles from './MainMenuButton.module.css';

interface IMainMenuButtonProps {
  name: string;
}

export class MainMenuButton extends Component<IMainMenuButtonProps, {}> {
  public render() {
    return (
      <div className={styles.button}>
        <a className={styles.link} href="#">
          {this.props.name}
        </a>
      </div>
    );
  }
}
