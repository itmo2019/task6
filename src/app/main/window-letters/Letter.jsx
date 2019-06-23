import React, { Component } from 'react';

import './Letter.css';
import { genLetterText, showArticle } from '../../functions/Functions';

export class Letter extends Component {
  constructor(props) {
    super(props);
    this.markerRef = React.createRef();
  }

  render() {
    window.setTimeout( function() {
      if(this.props.classS === "add") {
        this.markerRef.current.className = `window-letters__letter_${this.props.classS}`;
        window.setTimeout( function() {
          this.props.markNotNew(this.props.id);
        }.bind(this),
          1000);
      } else {
        if (this.markerRef.current !== null)
          this.markerRef.current.className = `window-letters__letter_${this.props.classS}`;
      }
        // const newLetter = document.getElementsByClassName('window-letters__letter');
        // if (newLetter[0] !== undefined) {
        //   newLetter[0].className = `window-letters__letter_${this.props.classS}`;
        // }
      }.bind(this),
      10);

    const myStyle = { backgroundColor: this.props.color };
    let darkClass = "window-letters__letter-innerior";
    if (this.props.isDark) {
      darkClass += ' dark-side';
    }

    return (
      <>
      <li className="window-letters__letter" ref={this.markerRef}>
          <input id={this.props.id} className="not_show" type="checkbox" onChange={() => this.props.openArticle(this.props.id)}/>
          <label htmlFor={this.props.id} className="xxx">
          <ul className={darkClass}>
            <li className="window-letters__square-for-button window-letters__letter-part">
              <label>
                <input type="checkbox"
                       className="window-letters__input-button"
                       onChange={() => this.props.letterChose(this.props.id)}
                       checked={this.props.chose}
                />
                <div className="window-letters__select-button"></div>
              </label>
            </li>
            <li className="window-letters__letter-sender_pict_wrap window-letters__letter-part">
              <div className="window-letters__letter-sender_pict" style={myStyle}>
                {this.props.sender[0]}
              </div>
            </li>
            <li className="window-letters__letter-sender window-letters__letter-part">
              {this.props.sender}
            </li>
            <li className="window-letters__letter-unread-point window-letters__letter-part">

            </li>
            <label htmlFor={this.props.id} className="window-letters__letter-text window-letters__letter-part">
              {this.props.letterText}
            </label>
            <li className="window-letters__letter-date window-letters__letter-part">
              {this.props.date}
            </li>
            {/*<hr className="window-letters__delimiter-line"/>*/}
          </ul>
          </label>
      </li>
        </>
    );
  }
}
