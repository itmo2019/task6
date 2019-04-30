import React from 'react';

import './folders-list.css';

function FoldersList() {
  return (
    <div className="folders-list">
      <div className="folders-list__folder selected">Входящие</div>
      <div className="folders-list__folder">Отправленные</div>
      <div className="folders-list__folder">Удаленные</div>
      <div className="folders-list__folder">Спам</div>
      <div className="folders-list__folder">Черновики</div>
      <div className="folders-list__folder">Создать папку</div>
    </div>
  );
}

export default FoldersList;
