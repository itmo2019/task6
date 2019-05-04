import cx from 'classnames';
import pure from 'recompose/pure';
import styles from './letter.module.css';
import React from 'react';

type LetterItemProps = {
  className?: string,
  children?: any
}

const LetterItem = (props: LetterItemProps) => {
  console.log('LetterItem');
  const { className, children } = props;
  const itemClassName = cx(styles.item, className);
  return <li className={itemClassName}>{children}</li>;
};

export default pure(LetterItem);
