import * as React from 'react';

import styles from './letter-view.module.css';

import { Checkbox } from '../checkbox/checkbox';
import { ILetter, ILetterInfo } from '../createLetter';

interface IProps {
  bLight: boolean;
  letter: ILetter;
  showLetter: (letterInfo: ILetterInfo) => void;
  clickOnSimpleCheckbox: (id?: number) => void;
}

export const LetterView: React.FunctionComponent<IProps> = props => {
  const fontColor = props.bLight ? styles['font-light'] : styles['font-dark'];
  return (
    <div
      className={styles.main}
      onClick={event => {
        const elem = event.target as HTMLElement;
        if (elem.querySelector(`.${styles.author}`) !== null) {
          props.showLetter(props.letter.info);
        }
      }}
      onKeyPress={undefined}
      role="button"
      aria-hidden
    >
      <Checkbox
        id={props.letter.id}
        checked={props.letter.bCheckbox}
        main={false}
        foo={props.clickOnSimpleCheckbox}
      />
      <div className={styles.photo} />
      <div className={`${styles.author} ${fontColor}`}>{props.letter.info.author}</div>
      <div className={styles.readed} />
      <div className={`${styles.theme} ${fontColor}`}>{props.letter.info.theme}</div>
      <div className={`${styles.content} ${fontColor}`}>{props.letter.info.content}</div>
      <div className={`${styles.data} ${fontColor}`}>
        <time dateTime="2019-03-01">3 мар</time>
      </div>
    </div>
  );
};
