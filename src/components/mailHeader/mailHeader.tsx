import React, { Props } from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import LinkBlock from '../linkBlock/linkBlock';

import styles from './mailHeader.module.css';

interface IProps {
  theme: string;
  filterText: string;
  filterProgress: number;
  changeFilterText: (value: string) => void;
  clearFilterText: () => void;
  onThemeBtnClick: () => void;
}

const MailHeader = (props: IProps) => {
  console.log('MailHeader');
  const {
    theme,
    filterText,
    filterProgress,
    changeFilterText,
    clearFilterText,
    onThemeBtnClick
  } = props;

  return (
    <header className={styles.box}>
      <Menu className={styles.menu} theme={theme} />
      <Logo className={styles.logo} theme={theme} />
      <div className={styles.rightBox}>
        <Search
          className={styles.search}
          theme={theme}
          filterText={filterText}
          filterProgress={filterProgress}
          onChange={changeFilterText}
          clearText={clearFilterText}
        />
        <div className={styles.linkBlock}>
          <LinkBlock title={theme.toUpperCase()} onClick={onThemeBtnClick} />
        </div>
      </div>
    </header>
  );
};

const checkPropsChange = (props: IProps, nextProps: IProps) =>
  nextProps.theme !== props.theme ||
  nextProps.filterText !== props.filterText ||
  nextProps.filterProgress !== props.filterProgress;

export default shouldUpdate(checkPropsChange)(MailHeader);
