import React, { useContext } from 'react';
import classNames from 'classnames';

import styles from './menu.module.css';
import headers from '../header/header.module.css';
import { ThemeContext, Theme } from '../theme-context';

export function Menu() {
  const theme = useContext(ThemeContext);
  let fl = false;
  if (theme === Theme.night)  {
    fl = true;
  }
  // console.log(theme);
  return (
    <div className={classNames(styles.menu)}>
      <div className={classNames(styles.menu__line, fl ? styles['menu__line_night'] : '')} />
      <div className={classNames(styles.menu__line, styles['menu__line-mrgn'], fl ? styles['menu__line_night'] : '')} />
      <div className={classNames(styles.menu__line, styles['menu__line-mrgn'], fl ? styles['menu__line_night'] : '')} />
    </div>
  );
}
