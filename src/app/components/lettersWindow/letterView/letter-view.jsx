import React from 'react';

import styles from './letter-view.module.css';

import { Checkbox } from '../checkbox/checkbox';

export function LetterView(props) {
  return (
    <div
      className={styles.main}
      onClick={event =>
        event.target.querySelector(`.${styles.author}`) !== null
          ? props.showLetter(props.letter.info)
          : null
      }
      onKeyPress={null}
      role="button"
      aria-hidden
    >
      <Checkbox
        fooForSimple={props.clickOnSimpleCheckbox}
        id={props.letter.id}
        checked={props.letter.bCheckbox}
      />
      <div className={styles.photo} />
      <div className={styles.author}>{props.letter.info.author}</div>
      <div className={styles.readed} />
      <div className={styles.theme}>{props.letter.info.theme}</div>
      <div className={styles.content}>{props.letter.info.content}</div>
      <div className={styles.data}>
        <time dateTime="2019-03-01">3 мар</time>
      </div>
    </div>
  );
}
