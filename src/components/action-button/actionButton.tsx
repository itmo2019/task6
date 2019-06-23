import React, { Component } from 'react';

import styles from './ActionButton.module.css';

interface IActionButtonProps {
  disabled: boolean;
  name: string;
  onClick?: () => void;
}

export class ActionButton extends Component<IActionButtonProps, {}> {
  public render() {
    return (
      <div
        className={[styles.actionButton, this.props.disabled ? styles.disabled : ''].join(' ')}
        onClick={this.props.onClick}
      >
        <a href="#">{this.props.name}</a>
      </div>
    );
  }
}
