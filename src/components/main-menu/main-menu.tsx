import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './MainMenu.module.css';

interface IMainMenu {
  className?: string;
}

interface IMainMenuItem {
  text?: string;
  href?: string;
}

function MainMenuItem(props: IMainMenuItem) {
  const ref = props.href === undefined ? '.' : props.href;
  const text = props.text === undefined ? 'Элемент меню' : props.text;

  return (
    <li className={styles.MainMenu__Item}>
      <a className={classNames(styles.MainMenu__Text, styles.MainMenu__Item)} href={ref}>
        {text}
      </a>
    </li>
  );
}

export class MainMenu extends Component<IMainMenu> {
  public render() {
    return (
      <ul className={classNames(styles.MainMenu, this.props.className)}>
        <li className={styles.MainMenu__Button}>
          <a className={classNames(styles.MainMenu__Text, styles.MainMenu__Button)} href=".">
            Написать
          </a>
        </li>

        <MainMenuItem text="Входящие" />
        <MainMenuItem text="Отправленные" />
        <MainMenuItem text="Удаленные" />
        <MainMenuItem text="Спам" />
        <MainMenuItem text="Черновики" />
        <MainMenuItem text="Создать папку" />
      </ul>
    );
  }
}
