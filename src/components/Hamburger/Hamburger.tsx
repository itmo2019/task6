import React from 'react';
import style from './Hamburger.module.css';

export const Hamburger = () => {
  return (
    <div className={style.hamburger}>
      <div className={style.slice} />
      <div className={style.slice} />
      <div className={style.slice} />
    </div>
  );
};
