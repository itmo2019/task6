import * as React from 'react';

import styles from './letters-window-body.module.css';

import { LetterView } from '../letterView/letter-view';
import { Line } from '../line/line';
import { ILetter, ILetterInfo } from '../createLetter';

interface IProps {
  oneLetter: ILetter;
  key: number;
  clickOnSimpleCheckbox: (id?: number) => void;
  removeLetters: () => void;
  showLetter: (letterInfo: ILetterInfo) => void;
}

export class LetterWithLine extends React.Component<IProps, {}> {
  public componentDidMount() {
    document.addEventListener('transitionend', this.props.removeLetters);
  }

  public render() {
    return (
      <div
        className={`${styles['letter-with-line']} ${
          this.props.oneLetter.bMarked ? styles['start-transition-opacity'] : ''
        }`}
      >
        <LetterView
          letter={this.props.oneLetter}
          showLetter={this.props.showLetter}
          clickOnSimpleCheckbox={this.props.clickOnSimpleCheckbox}
        />
        <Line />
      </div>
    );
  }
}
