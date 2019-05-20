import React, { Component } from 'react';

import './footerText.css';

export class FooterText extends Component {
  render() {
    return (
      <a href={`#${this.props.id}`} className="footer__ref">
        {this.props.text}
      </a>
    );
  }
}
