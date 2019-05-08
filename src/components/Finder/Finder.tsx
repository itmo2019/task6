import React, { useContext } from 'react';

import { getThemed, ThemeContext } from '../theme';

import style from './Finder.module.css';

export const Finder = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={style.finder}>
      <input className={getThemed(style.input, style, theme)} placeholder="Поиск" type="text" />
      <button className={getThemed(style.buttonClose, style, theme)} type="button">
        &times;
      </button>
    </div>
  );
};
