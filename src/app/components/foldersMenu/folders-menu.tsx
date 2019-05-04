import * as React from 'react';

import * as styles from './folders-menu.module.css';

interface IProps {
  bLight: boolean;
}

export const FoldersMenu: React.FunctionComponent<IProps> = props => {
  const styleForButtons = `${styles['folders-list-button']} ${
    props.bLight ? styles['folders-list-button-light'] : styles['folders-list-button-dark']
  }`;
  return (
    <div className={styles.main}>
      <button
        className={`${styles['button-write']} ${
          props.bLight ? styles['button-write-light'] : styles['button-write-dark']
        }`}
        type="submit"
      >
        Написать
      </button>
      <div className={styles['folders-list']}>
        <button
          className={`${styleForButtons} ${
            props.bLight
              ? styles['folders-list-button_selected-light']
              : styles['folders-list-button_selected-dark']
          }`}
          type="submit"
        >
          Входящие
        </button>
        <button className={styleForButtons} type="submit">
          Отправленные
        </button>
        <button className={styleForButtons} type="submit">
          Удаленные
        </button>
        <button className={styleForButtons} type="submit">
          Спам
        </button>
        <button className={styleForButtons} type="submit">
          Черновики
        </button>
        <button className={styleForButtons} type="submit">
          Создать папку
        </button>
      </div>
    </div>
  );
};
