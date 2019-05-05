import * as React from 'react';

import style from './Inbox.module.css';
import '../../index.css';
import { InboxFooter } from './InboxFooter';
import { InboxHeader } from './InboxHeader';
import { MailList } from '../MailList/MailList';
import { ILetter } from '../app'
import { Story } from './Story';

export interface InboxProps {
  letters: ILetter[];
  deleteSelected: () => void;
  toggleAll: () => void;
  toggleLetter: (id: number) => void;
  allSelected: boolean
}

export const Inbox = ({ letters, deleteSelected, toggleAll, toggleLetter, allSelected }: InboxProps) => {
  return (
    <div className={style.inbox}>
      <InboxHeader
        deleteSelected={deleteSelected}
        toggleAll={toggleAll}
        allSelected={allSelected}
      />
      <input className={style.showStoryCheckbox} id="show" type="checkbox" />
      <Story />
      <div className={style.wrapper}>
        <MailList letters={letters} toggleLetter={toggleLetter} />
      </div>
      <InboxFooter />
    </div>
  );
};
