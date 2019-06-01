import React, { Component } from 'react';

const styles = require('./OpenLetter.module.css');
const cross = require('./resources/cross.png');

interface IOpenLetterProps {
  theme: string;
  text: string;
  closeLetter: () => void;
}

export class OpenLetter extends Component<IOpenLetterProps, {}> {
  render() {
    return (
      <section>
        <div className={styles.openLetter}>
          <div className={styles.header}>
            <h3 className={styles.headerText}>
              {this.props.theme}
            </h3>
            <img className={styles.crossImage} src={cross} alt="x" onClick={this.props.closeLetter} />
          </div>
          <div className={[styles.content, styles.clearfix].join(' ')}>
            <article className={styles.article}>
              {this.props.text}
            </article>
          </div>
        </div>
      </section>
    );
  }
}
