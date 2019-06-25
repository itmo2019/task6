import *as React from 'react';

import styles from './allLetters.module.css';
import { Letter } from '../letter';
import {ILetter} from '../letterTypes/letterTypes';

interface IProps {
  create: boolean;
  visibleLetters: ILetter[];
  markedLetters: {[id: string]: boolean};
  switchLetterCheckbox: (id: number) => void;
  openLetter: (text: string[]) => void;
  deleteChosenLetter: (id: number) => void;
  isDark: boolean;
}

export class AllLetters extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <div className={styles.allLetters}>
        {this.props.visibleLetters.map(letter => {
          return (
            <Letter
              isDark={this.props.isDark}
              key={letter.id}
              id={letter.id}
              text={letter.text}
              author={letter.author}
              subject={letter.subject}
              date={letter.date}
              changeAnimation={letter.changeAnimation}
              switchLetterCheckbox={this.props.switchLetterCheckbox}
              deleteChosenLetter={this.props.deleteChosenLetter}
              isSelected={this.props.markedLetters[letter.id]}
              openLetter={this.props.openLetter}
            />
          );
        })}
      </div>
    );
  }
}
