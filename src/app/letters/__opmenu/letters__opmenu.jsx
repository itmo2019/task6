import React, { Component } from 'react';

import './letters__opmenu.css';

export default class LettersOpmenu extends Component {
  static deleteOnclick() {
    const lettersDiv = document.getElementsByClassName('letters__list')[0];
    const toRemove = [];
    for (let i = 0; i < lettersDiv.children.length; i++) {
      const child = lettersDiv.children[i];
      if (child.firstElementChild.checked) {
        toRemove.push(child);
      }
    }
    for (let i = 0; i < toRemove.length; i++) {
      lettersDiv.removeChild(toRemove[i]);
    }
  }

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
          onClick={LettersOpmenu.deleteOnclick}
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
