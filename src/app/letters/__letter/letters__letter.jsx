import React, { Component } from 'react';

import './letters__letter.css';
import unread from '../../../images/Oval.png';

export default class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.read) {
      this.state.read = '';
    } else {
      this.state.read = ' letters_unread';
    }
    this.open = this.open.bind(this);
  }

  unreadMarker() {
    if (this.state.read === '') {
      return null;
    }
    return (
      <figure className="unread-oval">
        <img src={unread} alt="unread" />
      </figure>
    );
  }

  open() {
    this.setState({ read: '' });
    document.getElementsByClassName('letters__list')[0].style.display = 'none';
    document.getElementsByClassName('letters__cross')[0].style.display = 'block';
    const article = document.getElementsByClassName('letters__article')[0];
    article.style.display = 'block';
  }

  render() {
    return (
      <div className="letters__letter">
        <input type="checkbox" className="letters__marker" />

        <p className={`letters__author${this.state.read}`}>{this.props.author}</p>

        <p className={`letters__theme${this.state.read}`} onClick={this.open}>
          {this.props.theme}
        </p>

        <p className="letters__date">{this.props.date}</p>

        {this.props.authorImage}

        {this.unreadMarker()}

        <div className="letters__line" />
      </div>
    );
  }
}
