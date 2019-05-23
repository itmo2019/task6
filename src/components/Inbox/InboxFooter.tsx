import * as React from 'react';
import { useContext } from 'react';

import { InboxFooterLink } from './InboxFooterItem';
import { getThemed, ThemeContext } from '../theme';

import style from './Inbox.module.css';


export const InboxFooter = () => {
  const theme = useContext(ThemeContext);
  return (
    <footer className={getThemed(style.footer, style, theme)}>
      <InboxFooterLink name="© 2001—2018, Яндекс" />
      <InboxFooterLink name="Реклама" />
      <InboxFooterLink name="Помощь и обратная связь" />
    </footer>
  );
};
