import * as React from 'react';
import style from './Inbox.module.css';

interface InboxHeaderButtonProps {
  action?: () => void;
  name: string
}

export const InboxHeaderButton = ({ action, name }: InboxHeaderButtonProps) => {
  return (
    <button className={style.headerButton} type="button" onClick={action}>
      {name}
    </button>
  );
};
