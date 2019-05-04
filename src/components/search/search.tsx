import React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import cx from 'classnames';

import styles from './search.module.css';

type Props = {
  className?: string,
  theme: string,
  filterText: string,
  filterProgress: number
  onChange: (value: string) => void,
  clearText: () => void
}

const Search = (props: Props) => {
  console.log('Search');
  const { className, theme, filterText, filterProgress, onChange, clearText } = props;
  const searchClassName = cx(styles.box, className);
  const inputClassName = cx(styles.input, styles['input_theme_' + theme]);
  const clearTextClassName = cx(styles.clearText, styles['clearText_theme_' + theme]);
  const progressClassName = cx(styles.progressBar, {
    [styles.progressBar_complete] : filterProgress === 1
  });

  return (
    <div className={searchClassName}>
      <input className={inputClassName} type="text" placeholder="Поиск"
             value={filterText} onChange={e => onChange(e.target.value)}/>
      <div className={styles.clearBox}>
        <div className={clearTextClassName} onClick={clearText}>×</div>
      </div>
      <progress className={progressClassName} max='1' value={filterProgress} />
    </div>
  );
};

const checkPropsChange = (props: Props, nextProps: Props) =>
  nextProps.theme !== props.theme ||
  nextProps.filterText !== props.filterText ||
  nextProps.filterProgress !== props.filterProgress;

export default shouldUpdate(checkPropsChange)(Search);
