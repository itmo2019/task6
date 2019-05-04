import * as React from 'react';

import styles from './letters-window-body.module.css';

import { LetterContent } from '../letterContent/letter-content';
import { LetterWithLine } from './letter-with-line';
import { ILetter, ILetterInfo } from '../createLetter';

interface IProps {
  bLight: boolean;
  letters: ILetter[];
  showingLetterContent: ILetterInfo | null;
  showLetter: (letterInfo: ILetterInfo) => void;
  closeLetter: () => void;
  clickOnSimpleCheckbox: (id?: number) => void;
  removeLetters: () => void;
}

export const LettersWindowBody: React.FunctionComponent<IProps> = props => {
  return (
    <div className={styles.main}>
      {props.showingLetterContent !== null ? (
        <LetterContent
          bLight={props.bLight}
          info={props.showingLetterContent}
          closeLetter={props.closeLetter}
        />
      ) : (
        props.letters.map((letter: ILetter) => (
          <LetterWithLine
            bLight={props.bLight}
            oneLetter={letter}
            key={letter.id}
            clickOnSimpleCheckbox={props.clickOnSimpleCheckbox}
            removeLetters={props.removeLetters}
            showLetter={props.showLetter}
          />
        ))
      )}
    </div>
  );
};
