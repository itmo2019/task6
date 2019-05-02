import React from 'react';
import './Menu.css';
import { MenuItems } from './menu-items/MenuItems';

export class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <button type="button" className="menu__button">
          Написать
        </button>
        <button
          type="button"
          className="menu__button menu__button_action_add-message"
          onClick={this.props.newMail}
        >
          Добавить письмо
        </button>
        <MenuItems />
      </div>
    );
  }
}
