import *as React from 'react';

import styles from './content.module.css';
import { LettersMenu } from '../lettersMenu';
import { LetterState } from '../lettersState';
import { Footer } from '../footer';
import { ILetter } from '../letterTypes/letterTypes';

interface IProps {
  selectAll: boolean;
  chooseAllLetters: () => void;
  markLettersToDelete: () => void;
  deleteChosenLetter: (id: number) => void;
  visibleLetters: ILetter[];
  markedLetters: {[id: string]: boolean};
  switchLetterCheckbox: (id: number) => void;
  isDark: boolean;
}

export class Content extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;
  render() {
    return (
      <div className={this.props.isDark ? styles.content_dark : styles.content}>
        <LettersMenu
          isDark={this.props.isDark}
          markLettersToDelete={this.props.markLettersToDelete}
          selectAll={this.props.selectAll}
          chooseAllLetters={this.props.chooseAllLetters}
        />
        <LetterState
          isDark={this.props.isDark}
          deleteChosenLetter={this.props.deleteChosenLetter}
          switchLetterCheckbox={this.props.switchLetterCheckbox}
          visibleLetters={this.props.visibleLetters}
          markedLetters={this.props.markedLetters}
        />
        <Footer />
      </div>
    );
  }
}
