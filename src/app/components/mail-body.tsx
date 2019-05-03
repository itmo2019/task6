import * as React from 'react';

import * as styles from './mail-body.module.css';

import { FoldersMenu } from './foldersMenu/folders-menu';
import { LettersWindow } from './lettersWindow/letters-window';

export function MailBody() {
  return (
    <main className={styles.main}>
      <FoldersMenu />
      <LettersWindow />
    </main>
  );
}
