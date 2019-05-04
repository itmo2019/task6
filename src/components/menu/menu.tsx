import React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import cx from 'classnames';

import styles from './menu.module.css';

type Props = {
  className?: string,
  theme: string
}

const Menu = (props: Props) => {
  console.log('Menu');
  const { className, theme } = props;
  const menuClassName = cx(styles.box, className);
  const hrClassName = cx(styles.hr, styles['hr_theme_' + theme]);

  return (
    <div className={menuClassName}>
      <div className={hrClassName} />
      <div className={hrClassName} />
      <div className={hrClassName} />
    </div>
  );
};

const checkPropsChange = (props: Props, nextProps: Props) =>
  nextProps.theme !== props.theme;

export default shouldUpdate(checkPropsChange)(Menu);
