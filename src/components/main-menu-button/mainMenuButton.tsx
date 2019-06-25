import React, { Component } from 'react';

import styles from './MainMenuButton.module.css';
import classNames from 'classnames/bind';
const c = classNames.bind(styles)

interface IMainMenuButtonProps {
  name: string;
  isCurrent: boolean;
  onClick: () => void;
}

export class MainMenuButton extends Component<IMainMenuButtonProps, {}> {
  public render() {
    let divClasses = c({button: true, button_current: this.props.isCurrent});
    return (
      <div className={divClasses} onClick={this.props.onClick}>
        <a className={styles.link} href="#">
          {this.props.name}
        </a>
      </div>
    );
  }
}
