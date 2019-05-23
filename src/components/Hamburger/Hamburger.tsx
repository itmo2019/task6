import React, { useContext } from 'react';
import style from './Hamburger.module.css';

import { getThemed, ThemeContext } from '../theme';


export const Hamburger = () => {
  const theme = useContext(ThemeContext);
  const themed = getThemed(style.slice, style, theme);
  return (
    <div className={style.hamburger}>
      <div className={themed} />
      <div className={themed} />
      <div className={themed} />
    </div>
  );
};
