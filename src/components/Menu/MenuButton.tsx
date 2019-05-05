import * as React from 'react';
import css from './Menu.module.css';

interface MenuButtonProps {
  name: string;
  current?: boolean;
  special?: boolean;
  action?: () => void;
}

export const MenuButton = ({ name, current, special, action }: MenuButtonProps) => {
  let style;
  if (current) {
    style = css.buttonCurrent;
  } else if (special) {
    style = css.buttonSpecial;
  } else {
    style = css.button;
  }

  return (
    <button className={style} type="button" onClick={action}>
      {name}
    </button>
  );
};
