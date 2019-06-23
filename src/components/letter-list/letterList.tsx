import React, { Component } from 'react';

import styles from './LetterList.module.css';
import { LetterData } from '../../util/random/random.js';
import { Letter } from '../letter';
import { OpenLetter } from '../open-letter';

interface ILetterListProps {
  letterOpened: boolean;
  letterTheme: string;
  letterText: string;
  letters: LetterData[];
  openLetter: (a: string, b: string) => void;
  closeLetter: () => void;
  selectLetter: (a: number) => void;
  removeLetter: (a: number) => void;
  letterShown: (a: number) => void;
}

export class LetterList extends Component<ILetterListProps, {}> {
  private letterDataToReact(mail: LetterData[]): JSX.Element[] {
    return mail.map(l => (
      <Letter
        id={l.id}
        key={l.key}
        text={l.text}
        sender={l.sender}
        date={`${l.day} ${l.month}`}
        checked={l.checked}
        shown={l.shown}
        visible={l.visible}
        openLetter={this.props.openLetter}
        letterShown={this.props.letterShown}
        selectLetter={this.props.selectLetter}
        removeLetter={this.props.removeLetter}
      />
    ));
  }

  public render() {
    return this.props.letterOpened ? (
      <div className={styles.letterList}>
        <OpenLetter
          theme={this.props.letterTheme}
          text={this.props.letterText}
          closeLetter={this.props.closeLetter}
        />
      </div>
    ) : (
      <div className={styles.letterList}>
        {this.props.letters.map(l => (
          <Letter
            id={l.id}
            key={l.key}
            text={l.text}
            sender={l.sender}
            date={`${l.day} ${l.month}`}
            checked={l.checked}
            shown={l.shown}
            visible={l.visible}
            openLetter={this.props.openLetter}
            letterShown={this.props.letterShown}
            selectLetter={this.props.selectLetter}
            removeLetter={this.props.removeLetter}
          />
        ))}
      </div>
    );
  }
}
