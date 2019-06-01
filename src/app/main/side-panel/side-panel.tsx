import React from 'react';

import './side-panel.css';

function SidePanel() {
  return (
    <div className="side-panel">
      <button className="side-panel__button side-panel__button_primary" type="button">
        Написать
      </button>
      <button
        className="side-panel__button side-panel__button_secondary side-panel__button_active"
        type="button"
      >
        Входящие
      </button>
      <button className="side-panel__button side-panel__button_secondary" type="button">
        Отправленные
      </button>
      <button className="side-panel__button side-panel__button_secondary" type="button">
        Удалённые
      </button>
      <button className="side-panel__button side-panel__button_secondary" type="button">
        Спам
      </button>
      <button className="side-panel__button side-panel__button_secondary" type="button">
        Черновики
      </button>
      <button className="side-panel__button side-panel__button_secondary" type="button">
        Создать папку
      </button>
    </div>
  );
}

export default SidePanel;
