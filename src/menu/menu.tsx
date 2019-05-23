import React, { Component } from 'react';

import styles from './Menu.module.css';

interface IProps {
  theme: string;
}

export default class Menu extends Component<IProps, {}> {
  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }

  private getHighlightedTheme() {
    if (this.props.theme === 'light') {
      return styles.highlightedLight;
    }
    return styles.highlightedDark;
  }

  private getHighlightedTextTheme() {
    if (this.props.theme === 'light') {
      return styles.highlightedTextLight;
    }
    return styles.highlightedTextDark;
  }

  public render() {
    return (
      <section className={styles.menuSection}>
        <div className={`${styles.highlighted} ${this.getHighlightedTheme()}`} />

        <div className={styles.menuItems}>
          <p id="inbox" className={`${styles.menuItem} ${styles.highlightedText} ${this.getHighlightedTextTheme()}`}>
            Входящие
          </p>
          <p id="sent" className={`${styles.menuItem} ${this.getTheme()}`}>
            Отправленные
          </p>
          <p id="trash" className={`${styles.menuItem} ${this.getTheme()}`}>
            Удаленные
          </p>
          <p id="spam" className={`${styles.menuItem} ${this.getTheme()}`}>
            Спам
          </p>
          <p id="drafts" className={`${styles.menuItem} ${this.getTheme()}`}>
            Черновики
          </p>
          <p id="new-folder" className={`${styles.menuItem} ${this.getTheme()}`}>
            Создать папку
          </p>
        </div>
      </section>
    );
  }
}
