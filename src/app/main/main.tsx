import React from 'react';
import MailWrapper from './mailbox/mailbox';
import SidePanel from './side-panel/side-panel';

import './main.css';

function Main() {
  return (
    <main>
      <SidePanel />
      <MailWrapper />
    </main>
  );
}

export default Main;
