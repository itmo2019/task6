import React, { Component } from 'react';

import styles from './letters.module.css';
import { Letter } from './letter/letter';
import { LetterType } from '../../../../types/types';

interface IProps {
  letters: LetterType[];
  checkedLetterIds: { [id: string]: boolean };
  onCheckboxChange: (id: string) => void;
  openLetter: (text: string[]) => void;
  searchText: string;
  isDark: boolean;
  removeAddAnimation: (id: string) => void;
  removeLetter: (id: string) => void;
}

export class Letters extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  private searchPredicate = (text: string[], searchText: string) => {
    return text.find((value: string) => {
      return value.includes(searchText);
    });
  };

  public readonly props: IProps;

  public render() {
    return (
      <div className={styles.letters}>
        {this.props.letters
          .filter((letter: LetterType) => {
            return this.searchPredicate(letter.text, this.props.searchText);
          })
          .map((letter: LetterType) => {
            if (letter.isVisible)
              return (
                <Letter
                  key={letter.id}
                  id={letter.id}
                  text={letter.text}
                  authorAbbr={letter.authorAbbr}
                  author={letter.author}
                  subject={letter.subject}
                  date={letter.date}
                  isChecked={this.props.checkedLetterIds[letter.id]}
                  onCheckboxChange={this.props.onCheckboxChange}
                  openLetter={this.props.openLetter}
                  isDark={this.props.isDark}
                  hasAddAnimation={letter.hasAddAnimation}
                  hasDeleteAnimation={letter.hasDeleteAnimation}
                  removeAddAnimation={this.props.removeAddAnimation}
                  removeLetter={this.props.removeLetter}
                />
              );
            return null;
          })}
      </div>
    );
  }
}
