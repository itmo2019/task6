import * as React from 'react';
import style from './Menu.module.css';
import { Hamburger } from '../Hamburger/Hamburger';
import { MenuButton } from './MenuButton';
import logo from '../../images/logoYandex.png';

interface MenuProps {
  newMail: () => void;
  newBatchMail: () => void;
}

export const Menu = ({ newMail, newBatchMail }: MenuProps) => {
  return (
    <div className={style.menu}>
      <div className={style.header}>
        <Hamburger />
        <div className={style.logo}>
          <img alt="Яндекс.Почта" className={style.picture} src={logo} />
        </div>
      </div>
      <MenuButton action={newMail} special name="Новое письмо" />
      <MenuButton action={newBatchMail} special name="1000 новых писем" />
      <MenuButton name="Входящие" current />
      <MenuButton name="Отправленные" />
      <MenuButton name="Удалённые" />
      <MenuButton name="Спам" />
      <MenuButton name="Черновики" />
      <MenuButton name="Создать папку" />
    </div>
  );
};
