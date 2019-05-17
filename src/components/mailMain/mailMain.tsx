import React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import Nav from '../nav/nav';
import LetterBox from '../letterBox/letterBox';

import styles from './mailMain.module.css';

interface IProps {
  theme: string;
  filterText: string;
  changeFilterProgress: (value: number) => void;
}

const MailMain = (props: IProps) => {
  console.log('MailMain');
  const { theme } = props;
  return (
    <main className={styles.box}>
      <Nav className={styles.nav} theme={theme} />
      <LetterBox className={styles.letterBox} {...props} />
    </main>
  );
};

const checkPropsChange = (props: IProps, nextProps: IProps) =>
  nextProps.theme !== props.theme || nextProps.filterText !== props.filterText;

export default shouldUpdate(checkPropsChange)(MailMain);
