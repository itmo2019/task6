import * as React from 'react';
import styles from './info.module.css';

interface IProps {
  nightMode: boolean;
}

export class Info extends React.Component<IProps> {
  public render() {
    const { nightMode } = this.props;
    const optionColor = nightMode ? styles.night : '';
    return (
      <div className={styles.info}>
        <a className={`${styles.option} ${optionColor}`} href="#help">
          Помощь и обратная связь
        </a>
        <a className={`${styles.option} ${optionColor}`} href="#adv">
          Реклама
        </a>
        <a className={`${styles.option} ${optionColor}`} href="#yandex">
          © 2001—2018, Яндекc
        </a>
      </div>
    );
  }
}
