import React, { Component } from 'react';

import styles from './letters.module.css';
import { Letter } from './letter/letter';
import { LetterType } from '../../../../types/types';

interface IProps {
  letters: LetterType[];
  checkedLetterIds: { [id: string]: boolean };
  onCheckboxChange: (id: string) => void;
  openLetter: (text: string[]) => void;
}

export class Letters extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div className={styles.letters}>
        {this.props.letters.map((letter: LetterType) => {
          if (letter.isVisible)
            return (
              <Letter
                key={letter.id}
                classNames={letter.classList}
                id={letter.id}
                text={letter.text}
                authorAbbr={letter.authorAbbr}
                author={letter.author}
                subject={letter.subject}
                date={letter.date}
                isChecked={this.props.checkedLetterIds[letter.id]}
                onCheckboxChange={this.props.onCheckboxChange}
                openLetter={this.props.openLetter}
              />
            );
          return null;
        })}
      </div>
    );
  }
}
