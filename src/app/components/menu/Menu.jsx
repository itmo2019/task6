import React from 'react';
import styles from './Menu.module.css';
import { MenuItems } from './menu-items/MenuItems';

export class Menu extends React.Component {
  render() {
    return (
      <div className={styles.menu}>
        <button type="button" className={styles.button}>
          Написать
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles['button_action_add-message']}`}
          onClick={this.props.newMail}
        >
          Добавить письмо
        </button>
        <MenuItems />
      </div>
    );
  }
}
