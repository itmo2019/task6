import * as React from 'react';

import * as styles from './mail-body.module.css';

import { FoldersMenu } from './foldersMenu/folders-menu';
import { LettersWindow } from './lettersWindow/letters-window';

interface IProps {
  bLight: boolean;
  searchValue: string;
}

export const MailBody: React.FunctionComponent<IProps> = props => {
  return (
    <main className={styles.main}>
      <FoldersMenu bLight={props.bLight} />
      <LettersWindow bLight={props.bLight} searchValue={props.searchValue} />
    </main>
  );
};
