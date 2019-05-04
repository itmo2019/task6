import React, { Component } from 'react';

import './letters__cross.css';
import cross from '../../../images/cross.png';

export default class LettersCross extends Component {
  render() {
    return (
      <figure className="letters__cross" onClick={this.props.close}>
        <img src={cross} alt="cross" />
      </figure>
    );
  }
}
