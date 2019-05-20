import React, { Component } from 'react';

import './letter.css';
import logo1 from './icons/ebay.png';
import logo2 from './icons/yandex.png';
import logo3 from './icons/live.png';
import logo4 from './icons/facebook.png';
import logo5 from './icons/twitter.png';
import logo6 from './icons/reddit.png';
import logo7 from './icons/youtube.png';

export class Letter extends Component {
  constructor(props) {
    super(props);
    this.onCheckboxChange = this.props.onCheckboxChange.bind(this);
    this.openLetter = this.props.openLetter.bind(this);
    this.firms = {
      ebay: logo1,
      yandex: logo2,
      live: logo3,
      facebook: logo4,
      twitter: logo5,
      reddit: logo6,
      youtube: logo7
    };
  }

  render() {
    return (
      <li className="main-block__letter animation-insert">
        <div>
          <input
            type="checkbox"
            className="check"
            onChange={() => this.onCheckboxChange(this.props.id)}
            checked={this.props.isChecked}
          />
          <div onClick={() => this.openLetter(this.props.text)}>
            <div className="main-block__img">
              <img src={this.firms[this.props.author]} alt={this.props.author} width="30" />
            </div>
            <span className="main-block__mail-from bold-text">{this.props.author}</span>
            <div className="main-block__mail-not-read" />
            <span className="main-block__topic bold-text">{this.props.topic} </span>
            <time className="main-block__date" dateTime={this.props.date}>
              {this.props.date}
            </time>
          </div>
        </div>
      </li>
    );
  }
}
