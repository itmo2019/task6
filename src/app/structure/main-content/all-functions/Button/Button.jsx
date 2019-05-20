import React, { Component } from 'react';

import './Button.css';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.action = this.props.action.bind(this);
  }

  render() {
    return (
      <button
        type="button"
        id={this.props.id}
        className="main-block__ref-func"
        onClick={() => {
          if (!this.props.isLetterOpened) this.action();
        }}
      >
        {this.props.title}
      </button>
    );
  }
}
