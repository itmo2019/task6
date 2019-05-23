import React, { Component } from 'react';

import styles from './letterPage.module.css';

interface IProps {
  closeLetter: () => void;
  text: string[];
}

export class LetterPage extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div className={styles.letterPage}>
        <a className={styles.letterPage__pageCloseButton} href="#" onClick={this.props.closeLetter}>
          &#x2715;
        </a>
        <div className={styles.letterPage__text}>
          {this.props.text.map((paragraph, index) => {
            return <p key={index.toString()}>{paragraph}</p>;
          })}
        </div>
      </div>
    );
  }
}
