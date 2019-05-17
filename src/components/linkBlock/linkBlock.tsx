import React from 'react';
import cx from 'classnames';

import styles from './linkBlock.module.css';

interface IProps {
  className?: string;
  onClick?: () => void;
  title: string;
}

const LinkBlock = (props: IProps) => {
  console.log('LinkBlock');
  const { className, title, onClick } = props;
  const linkBlockClassName = cx(styles.box, className);

  return (
    <button className={linkBlockClassName} type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default LinkBlock;
