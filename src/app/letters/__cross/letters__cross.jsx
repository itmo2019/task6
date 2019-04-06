import React, { Component } from 'react';

import './letters__cross.css';
import cross from '../../../images/cross.png';

export default class LettersCross extends Component {
  close() {
    document.getElementsByClassName('letters__list')[0].style.display = 'block';
    document.getElementsByClassName('letters__cross')[0].style.display = 'none';
    const article = document.getElementsByClassName('letters__article')[0];
    article.style.display = 'none';
  }

  render() {
    return (
      <figure className="letters__cross" onClick={this.close}>
        <img src={cross} alt="cross" />
      </figure>
    );
  }
}
