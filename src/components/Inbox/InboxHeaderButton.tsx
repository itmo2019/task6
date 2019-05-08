import * as React from 'react';
import { useContext } from 'react';

import { getThemed, ThemeContext } from '../theme';

import style from './Inbox.module.css';


interface InboxHeaderButtonProps {
  action?: () => void;
  name: string
}


export const InboxHeaderButton = ({ action, name }: InboxHeaderButtonProps) => {
  const theme = useContext(ThemeContext);
  return (
    <button className={getThemed(style.headerButton, style, theme)} type="button" onClick={action}>
      {name}
    </button>
  );
};
