import React, { Component } from 'react';

import styles from './searchInput.module.css';

interface IProps {
  searchFunction: (text: string) => void;
}

export class SearchInput extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div className={styles.searchInput}>
        <input
          className={styles.searchInput__input}
          type="text"
          placeholder="Поиск"
          onChange={event => this.props.searchFunction(event.target.value)}
        />
        <span className={styles.searchInput__close}>&#x2715;</span>
      </div>
    );
  }
}
