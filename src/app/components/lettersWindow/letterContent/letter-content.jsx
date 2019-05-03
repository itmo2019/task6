import React from 'react';

import styles from './letter-content.module.css';

export function LetterContent(props) {
  return (
    <div className={styles.main}>
      <div
        className={styles.close}
        onClick={props.closeLetter}
        onKeyPress={null}
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
}
