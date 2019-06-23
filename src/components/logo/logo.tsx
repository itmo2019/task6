import React, { Component } from 'react';

import utilCss from '../../util/UtilCss.module.css';
import styles from './Logo.module.css';
import { IThemeContext, ThemeContext } from '../app';
import classNames from 'classnames/bind';

const c = classNames.bind(styles)
const logo = require('../../resources/images/mail.png');

export class Logo extends Component {
  public render() {
    return (
      <ThemeContext.Consumer>
        {(context: IThemeContext) => {
          let imgClasses = c({img: true, dark: context.isDarkTheme})
          let divClasses = c({logo: true}, utilCss.noselect)
          return (
            <div className={divClasses}>
              <img className={imgClasses} draggable={false} alt={logo} src={logo} />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
