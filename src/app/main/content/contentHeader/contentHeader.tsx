import React, { Component } from 'react';

import styles from './contentHeader.module.css';
import { ContentHeaderMenu } from './contentHeaderMenu/contentHeaderMenu';

interface IProps {
  isAllChecked: boolean;
  selectAll: () => void;
  deleteLetters: () => void;
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
          className={styles.contentHeader__checkbox}
          type="checkbox"
          checked={this.props.isAllChecked}
          onChange={this.props.selectAll}
        />
        <ContentHeaderMenu deleteLetters={this.props.deleteLetters} />
      </div>
    );
  }
}
