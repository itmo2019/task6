import React from 'react';

import styles from './side-panel.module.css';

function SidePanel() {
  return (
    <div className={styles["side-panel"]}>
      <button className={`${styles["side-panel__button"]} ${styles["side-panel__button_primary"]}`} type="button">
        Написать
      </button>
      <button
        className={`${styles["side-panel__button"]} ${styles["side-panel__button_secondary"]} ${styles["side-panel__button_active"]}`}
        type="button"
      >
        Входящие
      </button>
      <button className={`${styles["side-panel__button"]} ${styles["side-panel__button_secondary"]}`} type="button">
        Отправленные
      </button>
      <button className={`${styles["side-panel__button"]} ${styles["side-panel__button_secondary"]}`} type="button">
        Удалённые
      </button>
      <button className={`${styles["side-panel__button"]} ${styles["side-panel__button_secondary"]}`} type="button">
        Спам
      </button>
      <button className={`${styles["side-panel__button"]} ${styles["side-panel__button_secondary"]}`} type="button">
        Черновики
      </button>
      <button className={`${styles["side-panel__button"]} ${styles["side-panel__button_secondary"]}`} type="button">
        Создать папку
      </button>
    </div>
  );
}

export default SidePanel;
