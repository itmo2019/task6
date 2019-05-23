import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './searchInput.module.css';

interface IProps {
  searchFunction: (text: string) => void;
  isDark: boolean;
}

export class SearchInput extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div
        className={classNames(
          styles.searchInput,
          this.props.isDark ? styles.searchInput_darkTheme : styles.searchInput_lightTheme
        )}
      >
        <input
          className={styles.searchInput__input}
          type="text"
          placeholder="Поиск"
          onChange={event => this.props.searchFunction(event.target.value)}
        />
        <span
          className={classNames(
            styles.searchInput__close,
            this.props.isDark
              ? styles.searchInput__close_darkTheme
              : styles.searchInput__close_lightTheme
          )}
        >
          &#x2715;
        </span>
      </div>
    );
  }
}
