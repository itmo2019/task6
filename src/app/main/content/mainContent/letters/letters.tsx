import React, { Component } from 'react';

import styles from './letters.module.css';
import { Letter } from './letter/letter';
import { LetterType } from '../../../../types/types';

const MAX_LETTERS = 30;

interface IProps {
  letters: LetterType[];
  checkedLetterIds: { [id: string]: boolean };
  onCheckboxChange: (id: string) => void;
  openLetter: (text: string[]) => void;
  searchText: string;
  isDark: boolean;
  removeAddAnimation: (id: string) => void;
  removeLetter: (id: string) => void;
  setVisibility: (id: string, value: boolean) => void;
}

export class Letters extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  private searchPredicate = (text: string[]) => {
    return text.find((value: string) => {
      return value.includes(this.props.searchText);
    });
  };

  public readonly props: IProps;

  public render() {
    let visible = 0;
    return (
      <div className={styles.letters}>
        {this.props.letters.map((letter: LetterType) => {
          if (visible < MAX_LETTERS && this.searchPredicate(letter.text)) {
            visible += 1;
            this.props.setVisibility(letter.id, true);
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
          }
          this.props.setVisibility(letter.id, false);
          return null;
        })}
      </div>
    );
  }
}
