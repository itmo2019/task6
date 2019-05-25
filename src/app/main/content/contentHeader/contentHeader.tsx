import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './contentHeader.module.css';
import { ContentHeaderMenu } from './contentHeaderMenu/contentHeaderMenu';

interface IProps {
  isAllChecked: boolean;
  selectAll: () => void;
  deleteLetters: () => void;
  isDark: boolean;
}

export class ContentHeader extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div className={styles.contentHeader}>
        <input
          className={classNames(
            styles.contentHeader__checkbox,
            this.props.isDark
              ? styles.contentHeader__checkbox_darkTheme
              : styles.contentHeader__checkbox_lightTheme
          )}
          type="checkbox"
          checked={this.props.isAllChecked}
          onChange={this.props.selectAll}
        />
        <ContentHeaderMenu deleteLetters={this.props.deleteLetters} />
      </div>
    );
  }
}
