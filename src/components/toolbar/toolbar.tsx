import React from 'react';
import pure from 'recompose/pure';
import cx from 'classnames';
import Check from '../check/check';

import IToolbarItem from './toolBarItem';

import styles from './toolbar.module.css';

interface IProps {
  children: IToolbarItem[];
  theme: string;
}

function renderSwitch(item: IToolbarItem, theme: string) {
  switch (item.type) {
    case 'button': {
      const btnClassName = cx(styles.button, styles[`button_theme_${theme}`], {
        [styles.button_isActive]: item.isActive
      });
      return (
        <input className={btnClassName} type="button" value={item.value} onClick={item.onClick} />
      );
    }
    case 'checkbox':
      return <Check onChange={item.onClick} isChecked={item.value} />;
    default:
      return <div />;
  }
}

const Toolbar = (props: IProps) => {
  // console.log('Toolbar');
  const { children, theme } = props;
  const listItems = children.map((item, index) => (
    <li key={index} className={styles.item}>
      {renderSwitch(item, theme)}
    </li>
  ));

  return <ul className={styles.box}>{listItems}</ul>;
};

export default pure(Toolbar);
