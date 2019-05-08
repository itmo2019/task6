import * as React from 'react';
import { useContext } from 'react';

import { InboxFooter } from './InboxFooter';
import { InboxHeader } from './InboxHeader';
import { MailList } from '../MailList/MailList';
import { Story } from './Story';

import { ILetter } from '../App/App';
import { getThemed, ThemeContext } from '../theme';

import style from './Inbox.module.css';


export interface InboxProps {
  letters: ILetter[];
  deleteSelected: () => void;
  toggleAll: () => void;
  toggleLetter: (id: number) => void;
  allSelected: boolean
}

export const Inbox = ({ letters, deleteSelected, toggleAll, toggleLetter, allSelected }: InboxProps) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={getThemed(style.inbox, style, theme)}>
      <InboxHeader
        deleteSelected={deleteSelected}
        toggleAll={toggleAll}
        allSelected={allSelected}
      />
      <input className={getThemed(style.showStoryCheckbox, style, theme)} id="show" type="checkbox" />
      <Story />
      <div className={style.wrapper}>
        <MailList letters={letters} toggleLetter={toggleLetter} />
      </div>
      <InboxFooter />
    </div>
  );
};
