import React, { Component } from 'react';

import './letters__footer.css';

export default class LettersFooter extends Component {
  render() {
    return (
      <div className="letters__footer">
        <p className="letters__footer-text">
          Помощь и обратная связь&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Реклама
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2001—2018, Яндекс
        </p>
      </div>
    );
  }
}
