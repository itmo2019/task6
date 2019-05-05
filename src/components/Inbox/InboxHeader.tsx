import * as React from 'react';

import style from './Inbox.module.css';
import { InboxHeaderButton } from './InboxHeaderButton';

interface InboxHeaderProps {
  deleteSelected: () => void;
  toggleAll: () => void;
  allSelected: boolean
}

export const InboxHeader = ({ toggleAll, deleteSelected, allSelected }: InboxHeaderProps) => {
  return (
    <div className={style.header}>
      <input
        className={style.headerCheckbox}
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
