import React from 'react';
import pure from 'recompose/pure';
import cx from 'classnames';

import styles from './check.module.css';

interface IProps {
  isChecked: boolean;
  onChange?: () => void;
}

const Check = (props: IProps) => {
  // console.log('Check');
  const { isChecked, onChange } = props;
  const boxClassName = cx(styles.box, {
    [styles.box_checked]: isChecked
  });

  return (
    <div className={styles.check}>
      <label>
        <input className={styles.input} type="checkbox" checked={isChecked} onChange={onChange} />
        <span className={boxClassName} />
      </label>
    </div>
  );
};

export default pure(Check);
