import * as React from 'react';
import styles from './menuOptions.module.css';

interface IProps {
  nightMode: boolean;
}

export class MenuOptions extends React.Component<IProps> {
  private static createMenuOption(name: string, color: string) {
    return (
      <li className={`${styles.option} ${color}`}>
        <a className={`${styles.link} ${color}`} href="#name">
          {name}
        </a>
      </li>
    );
  };

  public render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : '';
    const menuOptions = ['Отправленные', 'Удаленные', 'Спам', 'Черновики', 'Создать папку'];
    return (
      <ul className={styles.options}>
        <li className={`${styles.option} ${styles.incoming} ${color}`}>
          <a className={`${styles.link} ${color}`} href="#incoming">
            Входящие
          </a>
        </li>
        {menuOptions.map(name => MenuOptions.createMenuOption(name, color))}
      </ul>
    );
  }
}
