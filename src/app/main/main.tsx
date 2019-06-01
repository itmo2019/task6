import React from 'react';
import MailWrapper from './mailbox/mailbox';
import SidePanel from './side-panel/side-panel';

import styles from './main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <SidePanel />
      <MailWrapper />
    </div>
  );
}

export default Main;
