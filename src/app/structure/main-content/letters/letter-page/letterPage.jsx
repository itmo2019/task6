import React, { Component } from 'react';

import './letterPage.css';
import reset from './img/reset.png';

export class LetterPage extends Component {
  constructor(props) {
    super(props);
    this.closeLetter = this.props.closeLetter.bind(this);
  }

  render() {
    return (
      <div className="main-block__letter-content">
        <img
          src={reset}
          alt="reset"
          className="close"
          width="15"
          onClick={() => {
            this.closeLetter();
          }}
        />
        <p className="main-block__paragraph">{this.props.text}</p>
      </div>
    );
  }
}
