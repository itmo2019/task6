import React from 'react';

import * as styles from './header.module.css';

const headerMail = require('../../images/header-mail.svg');
const headerYandex = require('../../images/header-yandex.svg');

const headerMailDark = require('../../images/header-mail-dark.svg');
const headerYandexDark = require('../../images/header-yandex-dark.svg');

interface IHeaderProps {
  setSearchText: (text: string) => void;
  changeTheme: () => void;
  theme: boolean;
}

export class Header extends React.Component<IHeaderProps> {
  public constructor(props: IHeaderProps) {
    super(props);

    this.search = this.search.bind(this);
    this.getHeaderYandex = this.getHeaderYandex.bind(this);
    this.getHeaderMail = this.getHeaderMail.bind(this);
    this.getRectangleClass = this.getRectangleClass.bind(this);
    this.getSearchClass = this.getSearchClass.bind(this);
    this.getSearchInputClass = this.getSearchInputClass.bind(this);
    this.getSearchCancelButtonClass = this.getSearchCancelButtonClass.bind(this);
    this.getChangeThemeButtonClass = this.getChangeThemeButtonClass.bind(this);
  }

  private getHeaderYandex() {
    return !this.props.theme ? headerYandex : headerYandexDark;
  }

  private getHeaderMail() {
    return !this.props.theme ? headerMail : headerMailDark;
  }

  private getRectangleClass() {
    return !this.props.theme ? styles.rectangle : styles.rectangleDark;
  }

  private getSearchClass() {
    return !this.props.theme ? styles.search : styles.searchDark;
  }

  private getSearchInputClass() {
    return !this.props.theme ? styles.searchInput : styles.searchInputDark;
  }

  private getSearchCancelButtonClass() {
    return !this.props.theme ? styles.searchCancelButton : styles.searchCancelButtonDark;
  }

  private getChangeThemeButtonClass() {
    return !this.props.theme ? styles.changeThemeButton : styles.changeThemeButtonDark;
  }

  private search(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.setSearchText(event.target.value);
  }

  public render() {
    return (
      <header className={styles.header}>
        <div className={styles.menu}>
          <div className={this.getRectangleClass()} />
          <div className={this.getRectangleClass()} />
          <div className={this.getRectangleClass()} />
        </div>
        <div className={styles.title}>
          <img className={styles.logo} src={this.getHeaderYandex()} alt="logo" />
          <img className={styles.logo} src={this.getHeaderMail()} alt="logo" />
        </div>
        <div className={this.getSearchClass()}>
          <input
            className={this.getSearchInputClass()}
            type="search"
            placeholder="Поиск"
            onChange={this.search}
          />
          <button className={this.getSearchCancelButtonClass()} type="button" />
        </div>
        <button
          className={this.getChangeThemeButtonClass()}
          onClick={this.props.changeTheme}
          type="button"
        >
          <p className={styles.changeThemeButtonText}>Сменить тему</p>
        </button>
      </header>
    );
  }
}
