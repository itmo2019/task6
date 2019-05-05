import * as React from 'react';
import style from './Inbox.module.css';
import { InboxFooterLink } from './InboxFooterItem';

export const InboxFooter = () => {
  return (
    <footer className={style.footer}>
      <InboxFooterLink name="© 2001—2018, Яндекс" />
      <InboxFooterLink name="Реклама" />
      <InboxFooterLink name="Помощь и обратная связь" />
    </footer>
  );
};
