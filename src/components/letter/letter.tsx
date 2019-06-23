import React, { PureComponent } from 'react';

import utilCss from '../../util/UtilCss.module.css';
import styles from './Letter.module.css';
import { FancyCheckbox } from '../fancy-checkbox';
import { IThemeContext, ThemeContext } from '../app';
import classNames from 'classnames/bind';
const c = classNames.bind(styles);

const ya = require('../../resources/images/ya.jpg');

interface ILetterProps {
  visible: boolean;
  shown: boolean;
  sender: string;
  checked: boolean;
  text: string;
  date: string;
  id: number;
  openLetter: (a: string, b: string) => void;
  selectLetter: (a: number) => void;
  removeLetter: (a: number) => void;
  letterShown: (a: number) => void;
}

export class Letter extends PureComponent<ILetterProps, {}> {
  public render() {
    return (
      <ThemeContext.Consumer>
        {(context: IThemeContext) => {
          let sectionClasses = c({
            letter: true,
            dark: context.isDarkTheme,
            letter_new: this.props.visible && !this.props.shown,
            letter_removed: !this.props.visible
          });
          let imgClasses = c('img', utilCss.noselect);
          let senderClasses = c('from', 'bold', 'hideOverflow');
          let statusClasses = c('readStatus', 'unread');
          let textClasses = c('text', 'bold', 'hideOverflow');
          let timeClasses = c('date', 'hideOverflow');
          return (
            <section
              className={sectionClasses}
              onAnimationEnd={
                this.props.visible
                  ? () => {
                      this.props.letterShown(this.props.id);
                    }
                  : () => {
                      this.props.removeLetter(this.props.id);
                    }
              }
            >
              <FancyCheckbox
                additionalClasses={styles.checkbox}
                checked={this.props.checked}
                onChange={() => this.props.selectLetter(this.props.id)}
              />
              <span onClick={() => this.props.openLetter(this.props.sender, this.props.text)}>
                <img className={imgClasses} alt="letter icon" draggable={false} src={ya} />
                <span className={senderClasses}>{this.props.sender}</span>
                <span className={statusClasses} />
                <span className={textClasses}>{this.props.text}</span>
                <time className={timeClasses}>{this.props.date}</time>
              </span>
              <div className={utilCss.separator} />
            </section>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
