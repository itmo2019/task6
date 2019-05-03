import React from 'react';

import styles from './letters-window-header.module.css';

import { Checkbox } from '../checkbox/checkbox';

export function LettersWindowHeader(props) {
  const classNameForButtons = `${styles.button} ${
    props.bToolbar ? styles['button-activated'] : ''
  }`;

  return (
    <header className={styles.main}>
      <Checkbox main fooForMain={props.clickOnMainCheckbox} checked={props.bMainCheckbox} />
      <button className={classNameForButtons} type="submit">
        Переслать
      </button>
      <button className={classNameForButtons} type="submit" onClick={props.removeLetters}>
        Удалить
      </button>
      <button className={classNameForButtons} type="submit">
        Это спам!
      </button>
      <button className={classNameForButtons} type="submit">
        Прочитано
      </button>
    </header>
  );
}
