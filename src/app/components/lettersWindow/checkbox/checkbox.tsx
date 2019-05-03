import * as React from 'react';

import * as styles from './checkbox.module.css';

interface IProps {
  id: number;
  checked: boolean;
  main: boolean;
  foo: (id?: number) => void;
}

export const Checkbox: React.FunctionComponent<IProps> = props => {
  const id2str: string = props.id.toString(10);
  return (
    <label htmlFor={id2str}>
      <input className={styles.input} type="checkbox" checked={props.checked} readOnly />
      <div
        className={styles.area}
        onClick={() => {
          if (props.main) {
            props.foo();
          } else {
            props.foo(props.id);
          }
        }}
        onKeyPress={undefined}
        role="button"
        aria-hidden
      >
        <div className={styles['area-border']} />
      </div>
    </label>
  );
};
