import React, { Component } from 'react';

import styles from './OpenLetter.module.css';
import { IThemeContext, ThemeContext } from '../app';
import classNames from 'classnames/bind';

const c = classNames.bind(styles);
const cross = require('../../resources/images/cross.png');

interface IOpenLetterProps {
  theme: string;
  text: string;
  closeLetter: () => void;
}

export class OpenLetter extends Component<IOpenLetterProps, {}> {
  public render() {
    return (
      <ThemeContext.Consumer>
        {(context: IThemeContext) => {
          let letterClasses = c('openLetter', {
            dark: context.isDarkTheme
          })
          let imgClasses = c('crossImage', {
            dark: context.isDarkTheme
          })
          return (
            <section>
              <div className={letterClasses}>
                <div className={styles.header}>
                  <h3 className={styles.headerText}>{this.props.theme}</h3>
                  <img
                    className={imgClasses}
                    src={cross}
                    alt="x"
                    onClick={this.props.closeLetter}
                  />
                </div>
                <div className={c('content', 'clearfix')}>
                  <article className={styles.article}>{this.props.text}</article>
                </div>
              </div>
            </section>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
