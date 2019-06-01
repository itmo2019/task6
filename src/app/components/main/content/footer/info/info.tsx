import * as React from 'react';
import styles from './info.module.css';

interface IProps {
  nightMode: boolean;
}

export class Info extends React.Component<IProps> {
  render() {
    const { nightMode } = this.props;
    const optionColor = nightMode ? styles.night : styles.option;
    return (
      <div className={styles.info}>
        <a className={optionColor} href="#help">
          Помощь и обратная связь
        </a>
        <a className={optionColor} href="#adv">
          Реклама
        </a>
        <a className={optionColor} href="#yandex">
          © 2001—2018, Яндекc
        </a>
      </div>
    );
  }
}
