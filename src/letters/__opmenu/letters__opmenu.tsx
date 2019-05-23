import React, { Component } from 'react';

import styles from './LettersOpmenu.module.css';

interface IProps {
  theme: string;
  deleteOnclick(): void;
}

export default class LettersOpmenu extends Component<IProps, {}> {
  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }

  public render() {
    return (
      <div className={styles.opmenu}>
        <a id="forward" title="Forward" className={`${styles.opmenuItem} ${this.getTheme()} ${styles.forward}`}>
          Переслать
        </a>

        <a
          id="delete"
          title="Delete"
          className={`${styles.opmenuItem} ${this.getTheme()} ${styles.delete}`}
          onClick={this.props.deleteOnclick}
        >
          Удалить
        </a>

        <a id="letters__spam" title="Spam" className={`${styles.opmenuItem} ${this.getTheme()} ${styles.spam}`}>
          Это спам!
        </a>

        <a id="read" title="Read" className={`${styles.opmenuItem} ${this.getTheme()} ${styles.read}`}>
          Прочитано
        </a>
      </div>
    );
  }
}
