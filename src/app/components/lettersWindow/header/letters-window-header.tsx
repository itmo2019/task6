import * as React from 'react';

import styles from './letters-window-header.module.css';

import { Checkbox } from '../checkbox/checkbox';

interface IProps {
  bToolbar: boolean;
  bMainCheckbox: boolean;
  clickOnMainCheckbox: () => void;
  markSelectedLetters: () => void;
}

export const LettersWindowHeader: React.FunctionComponent<IProps> = props => {
  const classNameForButtons = `${styles.button} ${
    props.bToolbar ? styles['button-activated'] : ''
  }`;

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
