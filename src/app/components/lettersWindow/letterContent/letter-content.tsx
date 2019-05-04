import * as React from 'react';

import styles from './letter-content.module.css';
import { ILetterInfo } from '../createLetter';

interface IProps {
  bLight: boolean;
  info: ILetterInfo;
  closeLetter: () => void;
}

export const LetterContent: React.FunctionComponent<IProps> = props => {
  const fontColor = props.bLight ? styles['font-light'] : styles['font-dark'];
  return (
    <div className={styles.main}>
      <div
        className={`${styles.close} ${props.bLight ? styles['close-light'] : styles['close-dark']}`}
        onClick={props.closeLetter}
        onKeyPress={undefined}
        role="button"
        aria-hidden
      />
      <header className={styles.header}>
        <div className={`${styles['header-theme']} ${fontColor}`}>{props.info.theme}</div>
        <div className={`${styles['header-author']} ${fontColor}`}>{props.info.author}</div>
      </header>
      <div className={`${styles.body} ${fontColor}`}>{props.info.content}</div>
    </div>
  );
};
