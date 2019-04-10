import React, { Component } from 'react';

import './letters__opmenu.css';

export default class LettersOpmenu extends Component {
  render() {
    return (
      <div className="letters__opmenu">
        <a id="forward" title="Forward" className="letters__opmenuItem">
          Переслать
        </a>

        <a
          id="delete"
          title="Delete"
          className="letters__opmenuItem"
          onClick={this.props.deleteOnclick}
        >
          Удалить
        </a>

        <a id="letters__spam" title="Spam" className="letters__opmenuItem">
          Это спам!
        </a>

        <a id="read" title="Read" className="letters__opmenuItem">
          Прочитано
        </a>
      </div>
    );
  }
}
