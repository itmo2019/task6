import React, { Component } from 'react';

import * as styles from './header.module.css';

const headerMail: string = require('../../images/header-mail.svg');
const headerYandex: string = require('../../images/header-yandex.svg');

export class Header extends Component {

  public readonly props: {setSearchText: (text: string) => void};

  constructor(props: {setSearchText: (text: string) => void}) {
    super(props);
    this.props = props;
    this.search = this.search.bind(this);
  }

  search(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.setSearchText(event.target.value);
  }

  render() {
    return (
      <header className={styles.className}>
        <div className={styles.menu}>
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
        </div>
        <div className={styles.title}>
          <img className={styles.logo} src={headerYandex} alt="logo" />
          <img className={styles.logo} src={headerMail} alt="logo" />
        </div>
        <div className={styles.search}>
          <input className={styles.searchInput} type="search" placeholder="Поиск" onChange={this.search}/>
          <button className={styles.searchCancelButton} type="button" />
        </div>
      </header>
    );
  }
}
