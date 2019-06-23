import React, { PureComponent } from 'react';

import utilCss from '../../util/UtilCss.module.css';
import styles from './Letter.module.css';

import { FancyCheckbox } from '../fancy-checkbox';

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
      <section
        className={[
          styles.letter,
          this.props.visible ? (this.props.shown ? '' : styles.letter_new) : styles.letter_removed
        ].join(' ')}
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
          <img
            className={[styles.img, utilCss.noselect].join(' ')}
            alt="letter icon"
            draggable={false}
            src={ya}
          />
          <span className={[styles.from, styles.bold, styles.hideOverflow].join(' ')}>
            {this.props.sender}
          </span>
          <span className={[styles.readStatus, styles.unread].join(' ')} />
          <span className={[styles.text, styles.bold, styles.hideOverflow].join(' ')}>
            {this.props.text}
          </span>
          <time className={[styles.date, styles.hideOverflow].join(' ')}>{this.props.date}</time>
        </span>
        <div className={utilCss.separator} />
      </section>
    );
  }
}
