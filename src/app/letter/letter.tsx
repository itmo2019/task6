import React, { Component } from 'react';

import * as styles from './letter.module.css';

const close: string = require('../../images/cross-symbol.png');

interface LetterProps {
  text: string[],
  display: boolean,
  closeLetter: () => void
}

export class Letter extends Component {

  public readonly props: LetterProps;
  constructor(props: LetterProps) {
    super(props);
    this.props = props;
  }
  
  render() {
    const letter = [];
    for (let i = 0; i < this.props.text.length; i++) {
      letter.push(<p className={styles.text}>{this.props.text[i]}</p>);
    }
    return (
      <div
        id="main-letter"
        className={styles.className}
        style={{ display: this.props.display ? 'inline-block' : 'none' }}
      >
        <article className={styles.myArticle}>{letter}</article>
        <a
          href="#"
          id="close"
          onClick={() => {
            this.props.closeLetter();
          }}
        >
          <img className={styles.closeImg} src={close} alt="close" />
        </a>
      </div>
    );
  }
}
