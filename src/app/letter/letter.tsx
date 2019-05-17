import React, { Component } from 'react';

import * as styles from './letter.module.css';

const close: string = require('../../images/cross-symbol.png');

interface LetterProps {
  text: string[],
  display: boolean,
  closeLetter: () => void
}

export class Letter extends Component<LetterProps> {
  constructor(props: LetterProps) {
    super(props);

    this.makeClassName = this.makeClassName.bind(this);
  }

  makeClassName = () => {
    return this.props.display ? styles.letter : styles.hidden
  };

  render() {
    const letter = [];
    for (let i = 0; i < this.props.text.length; i++) {
      letter.push(<p className={styles.text}>{this.props.text[i]}</p>);
    }
    return (
      <div className={this.makeClassName()}>
        <article className={styles.myArticle}>{letter}</article>
        <a
          href="#"
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
