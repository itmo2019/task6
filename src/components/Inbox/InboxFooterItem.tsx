import * as React from 'react';
import { useContext } from 'react';

import { getThemed, ThemeContext } from '../theme';

import style from './Inbox.module.css';


export const InboxFooterLink = ({ name }: { name: string }) => {
  const theme = useContext(ThemeContext);
  return (
    <button className={getThemed(style.footerLink, style, theme)} type="button">
      {name}
    </button>
  );
};
