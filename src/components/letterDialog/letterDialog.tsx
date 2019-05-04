import React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import cx from 'classnames';

import styles from './letterDialog.module.css';

type Props = {
  isVisible: boolean,
  onExitClick: () => void,
  children: JSX.Element[]
}

const LetterDialog = (props: Props) => {
  console.log('LetterDialog');
  const { isVisible, onExitClick, children } = props;
  const dialogClassName = cx(styles.box, {
    [styles.box_isVisible]: isVisible
  });

  return (
    <section className={dialogClassName}>
      <div className={styles.exit} onClick={onExitClick}>
        ×
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

const checkPropsChange = (props: Props, nextProps: Props) =>
  nextProps.isVisible !== props.isVisible ||
  nextProps.children !== props.children;

export default shouldUpdate(checkPropsChange)(LetterDialog);

