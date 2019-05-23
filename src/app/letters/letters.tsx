import * as React from 'react';

import * as styles from './letters.module.css';

import { LetterHead } from '../letterHead/letterHead';
import { ILetterType } from '../types/types';

interface ILettersProps {
  letters: ILetterType[];
  checkboxChange: (id: string) => void;
  checked: { [id: string]: boolean };
  setText: (text: string[]) => void;
  setRead: (id: string) => void;
  removeAddAnimation: (id: string) => void;
  removeDeleteAnimation: (id: string) => void;
  display: boolean;
  showLetter: () => void;
  theme: boolean;
  searchText: string;
}

interface ILettersState {
  worker: any;
  searchFor: string;
  filteredLetters: ILetterType[] | null;
}

export class Letters extends React.Component<ILettersProps, ILettersState> {
  public constructor(props: ILettersProps) {
    super(props);

    this.state = {
      worker: null,
      searchFor: '',
      filteredLetters: null
    };

    this.makeClassName = this.makeClassName.bind(this);
    this.isLetterHasText = this.isLetterHasText.bind(this);
  }

  private makeClassName() {
    return this.props.display ? styles.letters : styles.hidden;
  }

  private isLetterHasText = (text: string, letter: ILetterType) => {
    if (text.length === 0) {
      return true;
    }
    if (
      letter.headText.toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) !== -1 ||
      letter.authorName.toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) !== -1
    ) {
      return true;
    }
    let f = false;
    for (let i = 0; i < letter.letterText.length && !f; i++) {
      if (letter.letterText[i].toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) !== -1) {
        f = true;
      }
    }
    return f;
  };

  // eslint-disable-next-line react/sort-comp
  private static filterLetters(letters: ILetterType[]) {
    let newLetters: ILetterType[] = letters;
    newLetters = newLetters.map((letter: ILetterType, index: number) => {
      letter.isVisible = index < 30;
      return letter;
    });
    return newLetters;
  }

  public render() {

    return (
      <ul className={this.makeClassName()}>
        {this.props.letters.map((letter: ILetterType, index: number) => {
          if (index < 30) {
            return (
              <LetterHead
                {...letter}
                key={letter.id}
                isChecked={this.props.checked[letter.id]}
                checkboxChange={this.props.checkboxChange}
                setText={this.props.setText}
                removeAddAnimation={this.props.removeAddAnimation}
                setRead={this.props.setRead}
                showLetter={this.props.showLetter}
                removeDeleteAnimation={this.props.removeDeleteAnimation}
                theme={this.props.theme}
              />
            );
          }
        })}
      </ul>
    );
  }
}
