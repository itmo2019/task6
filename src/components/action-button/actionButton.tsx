import React, { Component } from 'react';

import styles from './ActionButton.module.css';
import { IThemeContext, ThemeContext } from '../app';
import classNames from 'classnames/bind';

const c = classNames.bind(styles);

interface IActionButtonProps {
  disabled: boolean;
  name: string;
  onClick?: () => void;
}

export class ActionButton extends Component<IActionButtonProps, {}> {
  public render() {
    return (
      <ThemeContext.Consumer>
        {(context: IThemeContext) => {
          let divClass = c({
            actionButton: true,
            dark: context.isDarkTheme,
            disabled: this.props.disabled
          });
          return (
            <div className={divClass} onClick={this.props.onClick}>
              <a href="#">{this.props.name}</a>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
