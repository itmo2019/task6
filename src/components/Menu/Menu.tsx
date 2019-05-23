import * as React from 'react';
import { useContext } from 'react';

import { Hamburger } from '../Hamburger/Hamburger';
import { MenuButton } from './MenuButton';
import { getThemed, ThemeContext } from '../theme';

import style from './Menu.module.css';

import logo from './images/logoYandex.png';


interface MenuProps {
  newMail: () => void;
  newBatchMail: () => void;
  toggleTheme: () => void;
}


export const Menu = ({ newMail, newBatchMail, toggleTheme }: MenuProps) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={style.menu}>
      <div className={getThemed(style.header, style, theme)}>
        <Hamburger />
        <div className={style.logo}>
          <img alt="Яндекс.Почта" className={getThemed(style.picture, style, theme)} src={logo} />
        </div>
      </div>
      <MenuButton action={newMail} special name="Новое письмо" />
      <MenuButton action={newBatchMail} special name="1000 новых писем" />
      <MenuButton action={toggleTheme} special name="Переключить тему" />
      <MenuButton name="Входящие" current />
      <MenuButton name="Отправленные" />
      <MenuButton name="Удалённые" />
      <MenuButton name="Спам" />
      <MenuButton name="Черновики" />
      <MenuButton name="Создать папку" />
    </div>
  );
};
