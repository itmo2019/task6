import * as React from 'react';

import * as styles from './folders-menu.module.css';

export function FoldersMenu() {
  return (
    <div className={styles.main}>
      <button className={styles['button-write']} type="submit">
        Написать
      </button>
      <div className={styles['folders-list']}>
        <button
          className={`${styles['folders-list-button']} ${styles['folders-list-button_selected']}`}
          type="submit"
        >
          Входящие
        </button>
        <button className={styles['folders-list-button']} type="submit">
          Отправленные
        </button>
        <button className={styles['folders-list-button']} type="submit">
          Удаленные
        </button>
        <button className={styles['folders-list-button']} type="submit">
          Спам
        </button>
        <button className={styles['folders-list-button']} type="submit">
          Черновики
        </button>
        <button className={styles['folders-list-button']} type="submit">
          Создать папку
        </button>
      </div>
    </div>
  );
}
