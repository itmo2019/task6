import * as React from 'react';

import style from './Inbox.module.css';

export const InboxFooterLink = ({ name }: { name: string }) => {
  return (
    <button className={style.footerLink} type="button">
      {name}
    </button>
  );
};
