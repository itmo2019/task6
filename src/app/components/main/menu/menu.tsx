import * as React from 'react';
import styles from './menu.module.css';
import { MenuOptions } from './menu-options/menuOptions';

interface IProps {
  nightMode: boolean;
  newMail: () => void;
}

export class Menu extends React.Component<IProps> {
  render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : '';
    return (
      <div className={styles.menu}>
        <button type="button" className={`${styles.button} ${color}`}>
          Написать
        </button>
        <MenuOptions nightMode={nightMode}/>
        <button
          type="button"
          className={`${styles.button} ${color}`}
          onClick={this.props.newMail}
        >
          Получить письмо
        </button>
      </div>
    );
  }
}
