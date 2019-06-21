import React, { Component } from 'react';

import styles from './Cross.module.css';
import cross from '../../images/cross.png';

interface IProps {
  removeSearchTextInput(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export default class SearchCross extends Component<IProps, {}> {
  public render() {
    return (
      <figure className={styles.cross} onClick={this.props.removeSearchTextInput}>
        <img src={cross} alt="Cross" />
      </figure>
    );
  }
}
