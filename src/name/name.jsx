import React, { Component } from 'react';

import './name.css';
import shape from '../images/Shape.png';

export default class Name extends Component {
  render() {
    return (
      <div className="name">
        <img src={shape} alt="Yandex.Mail" />
      </div>
    );
  }
}
