import React from 'react';

import style from './Finder.module.css';

export const Finder = () => {
  return (
    <div className={style.finder}>
      <input className={style.input} placeholder="Поиск" type="text" />
      <button className={style.buttonClose} type="button">
        &times;
      </button>
    </div>
  );
};
