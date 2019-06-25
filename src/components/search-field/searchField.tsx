import React, { Component } from 'react';

import utilCss from '../../util/UtilCss.module.css';
import styles from './SearchField.module.css';

const cross = require('../../resources/images/cross.png');

interface ISearchFieldProps {
  searchValue: string;
  onSearchChange: (a: string) => void;
  clearSearchValue: () => void;
}

export class SearchField extends Component<ISearchFieldProps, {}> {
  public render() {
    return (
      <div className={styles.searchField}>
        <input
          className={styles.input}
          placeholder="Поиск"
          type="search"
          value={this.props.searchValue}
          onChange={e => {
            this.props.onSearchChange(e.currentTarget.value);
          }}
        />
        <span className={utilCss.noselect}>
          <img
            className={styles.closeImage}
            draggable={false}
            src={cross}
            alt="x"
            onClick={this.props.clearSearchValue}
          />
        </span>
      </div>
    );
  }
}
