import *as React from 'react';

import styles from './mailMenu.module.css';
import {Button} from '../button';

export class MailMenu extends React.Component {
  render() {
    return (
      <ul className={styles.mailMenu__actionsBlock}>
        <Button name="Входящие" />
        <Button name="Отправленные" />
        <Button name="Удаленные" />
        <Button name="Спам" />
        <Button name="Черновики" />
        <Button name="Создать папку" />
      </ul>
    );
  }
}
