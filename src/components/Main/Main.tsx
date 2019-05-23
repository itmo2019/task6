import * as React from 'react';

import { Inbox, InboxProps } from '../Inbox/Inbox';
import { Finder } from '../Finder/Finder';

import style from './Main.module.css';


export const Main = ({ ...props }: InboxProps) => {
  return (
    <div className={style.main}>
      <Finder />
      <div className={style.inboxContainer}>
        <Inbox {...props} />
      </div>
    </div>
  );
};
