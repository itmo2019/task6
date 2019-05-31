import React, { Component } from 'react';

import { LetterPage } from './letter-page/letterPage';
import { LetterList } from './letters-list/letterList';
import { LetterType } from '../../../app';

interface IProps {
  isLetterOpened : boolean;
  openedLetterText : string[];
  closeLetter : () => void;
  openLetter : (text : string[]) => void;
  onCheckboxChange : (id : string) => void;
  letters : LetterType[];
  checkedLetters: { [id: string]: boolean };
}

export class Letters extends Component<IProps> {
  constructor(props : IProps){
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  render() {
    return this.props.isLetterOpened ? (
      <LetterPage text={this.props.openedLetterText} closeLetter={this.props.closeLetter} />
  ) : (
      <LetterList
        letters={this.props.letters}
    checkedLetters={this.props.checkedLetters}
    openLetter={this.props.openLetter}
    onCheckboxChange={this.props.onCheckboxChange}
    />
  );
  }
}
