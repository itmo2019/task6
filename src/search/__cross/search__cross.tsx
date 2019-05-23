import React, { Component } from 'react';

import styles from './Cross.module.css';
import cross from '../../images/cross.png';

export default class SearchCross extends Component {
  public render() {
    return (
      <figure className={styles.cross}>
        <img src={cross} alt="Cross" />
      </figure>
    );
  }
}
