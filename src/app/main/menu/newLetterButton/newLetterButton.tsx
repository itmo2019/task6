import React, { Component } from 'react';

import styles from './newLetterButton.module.css';

interface IProps {
  newLetterButtonOnClick: () => void;
}

export class NewLetterButton extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <button className={styles.menu__newLetterButton} onClick={this.props.newLetterButtonOnClick}>
        <span className={styles.menu__newLetterButtonText}>Написать</span>
      </button>
    );
  }
}
