import * as React from 'react';

import styles from './letters-window-header.module.css';

import { Checkbox } from '../checkbox/checkbox';

interface IProps {
  bToolbar: boolean;
  bMainCheckbox: boolean;
  bLight: boolean;
  clickOnMainCheckbox: () => void;
  markSelectedLetters: () => void;
}

export const LettersWindowHeader: React.FunctionComponent<IProps> = props => {
  let classNameForButtons: string = `${styles.button} ${
    props.bLight ? styles['button-light'] : styles['button-dark']
  }`;
  if (props.bToolbar) {
    if (props.bLight) {
      classNameForButtons += ` ${styles['button-activated-light']}`;
    } else {
      classNameForButtons += ` ${styles['button-activated-dark']}`;
    }
  }

  return (
    <header className={styles.main}>
      <Checkbox id={0} checked={props.bMainCheckbox} main foo={props.clickOnMainCheckbox} />
      <button className={classNameForButtons} type="submit">
        Переслать
      </button>
      <button className={classNameForButtons} type="submit" onClick={props.markSelectedLetters}>
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
};
