import React, { Component } from 'react'

import './Article.css';
import { genLetterText, showArticle } from '../../functions/Functions';

export class Article extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <input id={this.props.id} type="checkbox" className="qqq" onChange={() => this.props.openLetters()}/>
        <article className="window-letters__article">
          <label htmlFor={this.props.id} className="window-letters__article-cancel-sign"
                 >&#9747;</label>
          {this.props.letterText}
        </article>
      </div>
    )
  }
}
