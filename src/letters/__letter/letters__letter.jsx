import React, { Component } from 'react';

import './letters__letter.css';
import unread from '../../images/Oval.png';

export default class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.open = this.open.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(checkbox) {
    this.props.handleCheckbox(checkbox, this.props.number);
  }

  convertReadProp() {
    if (this.props.read) {
      return '';
    }
    return ' letters_unread';
  }

  unreadMarker() {
    if (this.props.read) {
      return null;
    }
    return (
      <figure className="unread-oval">
        <img src={unread} alt="unread" />
      </figure>
    );
  }

  open() {
    this.props.open(this.props.number);
  }

  render() {
    return (
      <div className="letters__letter">
        <input
          type="checkbox"
          className="letters__marker"
          checked={this.props.checked}
          onChange={this.handleCheckbox}
        />

        <p className={`letters__author${this.convertReadProp()}`}>{this.props.author}</p>

        <p className={`letters__theme${this.convertReadProp()}`} onClick={this.open}>
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
