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
}

export class Letters extends React.Component<ILettersProps> {
  public constructor(props: ILettersProps) {
    super(props);

    this.makeClassName = this.makeClassName.bind(this);
  }

  private makeClassName() {
    return this.props.display ? styles.letters : styles.hidden;
  }

  public render() {
    return (
      <ul className={this.makeClassName()}>
        {this.props.letters.map((letter: ILetterType) => {
          if (letter.isVisible) {
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
