import React, { Component } from 'react';

import './letters__article.css';
import LettersCross from './__cross/letters__cross';

export default class LettersArticle extends Component {
  render() {
    return (
      <div className="letters__article">
        <h3 className="letters__article-title">{this.props.articleHeader}</h3>
        <p>{this.props.articleContent}</p>
        <LettersCross close={this.props.close} />
      </div>
    );
  }
}
