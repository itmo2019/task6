import React, { Component } from 'react';

import './search__cross.css';
import cross from '../../../images/cross.png';

export default class SearchCross extends Component {
  render() {
    return (
      <figure className="search__cross">
        <img src={cross} alt="Cross" />
      </figure>
    );
  }
}
