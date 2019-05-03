import * as React from 'react';

import styles from './letter-content.module.css';
import { ILetterInfo } from '../createLetter';

interface IProps {
  info: ILetterInfo;
  closeLetter: () => void;
}

export const LetterContent: React.FunctionComponent<IProps> = props => {
  return (
    <div className={styles.main}>
      <div
        className={styles.close}
        onClick={props.closeLetter}
        onKeyPress={undefined}
        role="button"
        aria-hidden
      />
      <header className={styles.header}>
        <div className={styles['header-theme']}>{props.info.theme}</div>
        <div className={styles['header-author']}>{props.info.author}</div>
      </header>
      <div className={styles.body}>{props.info.content}</div>
    </div>
  );
};
