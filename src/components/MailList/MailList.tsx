import * as React from 'react';
import { Letter } from '../Letter/Letter';

import style from './MailList.module.css';
import { ILetter } from '../app';

interface MailListProps {
  letters: ILetter[];
  toggleLetter: (id: number) => void;
}

export const MailList = ({ letters, toggleLetter }: MailListProps) => {
  return (
    <ul className={style.mailList} id="mail-list">
      {letters.map(letter => {
        if (letter.new) {
          return <Letter letter={letter} toggleLetter={toggleLetter} key={letter.key} />;
        }

        return <Letter letter={letter} toggleLetter={toggleLetter} key={letter.key} />;
      })}
    </ul>
  );
};
