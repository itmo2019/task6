import React, { Component } from 'react';

import utilCss from '../../util/UtilCss.module.css';
import styles from './MenuIcon.module.css';
import { IThemeContext, ThemeContext } from '../app';
import classNames from 'classnames/bind';

const c = classNames.bind(styles);
const icon = require('../../resources/images/icon.png');

export class MenuIcon extends Component {
  public render() {
    return (
      <ThemeContext.Consumer>
        {(context: IThemeContext) => {
          let divClasses = c({menuIcon: true}, utilCss.noselect)
          let imgClasses = c({img: true, dark: context.isDarkTheme})
          return (
            <div className={divClasses}>
              <img className={imgClasses} draggable={false} src={icon} alt={icon} />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
