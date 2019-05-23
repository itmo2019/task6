import * as React from 'react';
import { useContext } from 'react';

import { InboxHeaderButton } from './InboxHeaderButton';
import { getThemed, ThemeContext } from '../theme';

import style from './Inbox.module.css';


interface InboxHeaderProps {
  deleteSelected: () => void;
  toggleAll: () => void;
  allSelected: boolean
}


export const InboxHeader = ({ toggleAll, deleteSelected, allSelected }: InboxHeaderProps) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={getThemed(style.header, style, theme)}>
      <input
        className={getThemed(style.headerCheckbox, style, theme)}
        type="checkbox"
        checked={allSelected}
        onChange={toggleAll}
      />
      <InboxHeaderButton name="Переслать" />
      <InboxHeaderButton name="Удалить" action={deleteSelected} />
      <InboxHeaderButton name="Это спам!" action={deleteSelected} />
      <InboxHeaderButton name="Прочитано" />
    </div>
  );
};
