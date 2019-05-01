import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SearchBox.module.css';

interface ISearchBox {
  className?: string;
  placeholder?: string;
}

export class SearchBox extends Component<ISearchBox> {
  public render() {
    return (
      <input
        className={classNames(styles.SearchBox, this.props.className)}
        type="search"
        placeholder={this.props.placeholder}
      />
    );
  }
}
