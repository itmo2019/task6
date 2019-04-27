import React from 'react';

import Menu from '../menu';
import MailsMaintenance from '../mails-maintenance';

import styles from './main-page.module.css';

function MainPage(props: {searchField: string}) {
  return    <div className={styles['main-page']}>
                <div className={styles['menu-wrapper']}>
                    <Menu />
                </div>
                <div className={styles['mails-maintenance-wrapper']}>
                    <MailsMaintenance {...props} /> 
                </div>
            </div>
}

export default MainPage;
