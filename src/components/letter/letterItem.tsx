import React from 'react';
import cx from 'classnames';
import pure from 'recompose/pure';
import styles from './letter.module.css';

interface ILetterItemProps {
  className?: string;
  children?: any;
}

const LetterItem = (props: ILetterItemProps) => {
  console.log('LetterItem');
  const { className, children } = props;
  const itemClassName = cx(styles.item, className);
  return <li className={itemClassName}>{children}</li>;
};

export default pure(LetterItem);
