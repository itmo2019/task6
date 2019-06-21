import React, { Component } from 'react';

import styles from './Cross.module.css';
import cross from '../../../images/cross.png';

interface IProps {
  close(): void;
}

export default class LettersCross extends Component<IProps, {}> {
  public render() {
    return (
      <figure className={styles.cross} onClick={this.props.close}>
        <img src={cross} alt="cross" />
      </figure>
    );
  }
}
