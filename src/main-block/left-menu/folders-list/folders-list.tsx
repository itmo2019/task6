import React from 'react';

import styles from './folders-list.module.css';

class FoldersList extends React.Component{
  render() {
    return (
      <div className={styles['folders-list']}>
        <div className={styles['folders-list__folder'] + " " + styles['selected']}>Входящие</div>
        <div className={styles['folders-list__folder']}>Отправленные</div>
        <div className={styles['folders-list__folder']}>Удаленные</div>
        <div className={styles['folders-list__folder']}>Спам</div>
        <div className={styles['folders-list__folder']}>Черновики</div>
        <div className={styles['folders-list__folder']}>Создать папку</div>
      </div>
    );
  }
}

export default FoldersList;
