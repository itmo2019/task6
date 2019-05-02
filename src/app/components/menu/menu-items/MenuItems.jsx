import React from 'react';
import './MenuItems.css';

export class MenuItems extends React.Component {
  createMenuItem = name => {
    return (
      <li className="menu__item">
        <a className="menu-link" href="#name">
          {name}
        </a>
      </li>
    );
  };

  render() {
    const menuItemsNames = ['Отправленные', 'Удаленные', 'Спам', 'Черновики', 'Создать папку'];
    return (
      <ul className="menu__items">
        <li className="menu__item menu__item_active">
          <a className="menu-link" href="#incomeMessages">
            Входящие
          </a>
        </li>
        {menuItemsNames.map(name => this.createMenuItem(name))}
      </ul>
    );
  }
}
