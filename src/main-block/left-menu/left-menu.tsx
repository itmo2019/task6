import React, { ReactComponentElement } from 'react';

import styles from './left-menu.module.css';
import FoldersList from './folders-list/folders-list';

class LeftMenu extends React.Component {
  render() {
    return (
      <div className={styles['main-block__left-menu']}>
        <div className={styles['left-menu__write-letter']}>Написать</div>
        <FoldersList />
      </div>
    );
  }
}

export default LeftMenu;
