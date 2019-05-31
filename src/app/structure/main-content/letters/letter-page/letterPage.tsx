import React, { Component } from 'react';

import styles from './letterPage.module.css';
import reset from './img/reset.png';

interface IProps {
  closeLetter : () => void;
  text : string[];
}

export class LetterPage extends Component<IProps> {
  constructor(props : IProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.mainBlock__letterContent}>
        <img
          src={reset}
          alt="reset"
          className={styles.close}
          width="15"
          onClick={() => {
            this.props.closeLetter();
          }}
        />
        <p className={styles.mainBlock__paragraph}>{this.props.text}</p>
      </div>
    );
  }
}
