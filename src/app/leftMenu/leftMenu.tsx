import *as React from 'react';

import styles from './leftMenu.module.css';
import { MailMenu } from '../mailMenu';

interface IProps {
  newMail: () => void;
}

export class LeftMenu extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <div className={styles.leftMenu}>
        <button className={styles.leftMenu__button} onClick={this.props.newMail}>
          <span className={styles.leftMenu__textWrite}>Написать</span>
        </button>
        <MailMenu />
      </div>
    );
  }
}
