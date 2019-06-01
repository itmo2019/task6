import React, { Component } from 'react';

import styles from './lettersList.module.css';
import { Letter } from './letter/letter';
import { LetterType } from '../../../../app';

interface IProps {
  letters : LetterType[];
  openLetter : (text : string[]) => void;
  onCheckboxChange : (id : string) => void;
  checkedLetters: { [id: string]: boolean };
}
export class LetterList extends Component<IProps> {
  constructor(props : IProps){
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  render() {
    return (
      <ul className={styles.mainBlock__allLetters}>
        {this.props.letters.map(letter => {
          if (letter.isVisible)
            return (
              <Letter
                key = {letter.id}
                letterStates={letter}
                isChecked={this.props.checkedLetters[letter.key]}
                onCheckboxChange={this.props.onCheckboxChange}
                openLetter={this.props.openLetter}
              />
            );
        })}
      </ul>
    );
  }
}
