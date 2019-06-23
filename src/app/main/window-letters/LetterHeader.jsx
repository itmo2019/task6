import React, { Component } from 'react';

import './LetterHeader.css';

export class LetterHeader extends Component {

  render() {
    return(
      <ul className="window-letters__header">
        <li className="window-letters__square-for-button window-letters__header-part">
          <label>
            <input type="checkbox" name="CCC" className="window-letters__input-button"
                   onClick={() => this.props.allLettersChose(document.querySelector('.window-letters__input-button').checked)}/>
              <div className="window-letters__select-button"></div>
          </label>
        </li>
        <li className="window-letters__header-part">
          <input type="button" name="resendButton" value="Переслать" className=" window-letters__header-buttons"
                 onClick={() => {
                   this.props.letterAdded(0);
                 }} />
        </li>
        <li className="window-letters__header-part">
          <input type="button" name="deleteButton" value="Удалить" className="window-letters__header-buttons"
                 onClick={() => {
                   document.querySelector('.window-letters__input-button').checked = false;
                   this.props.lettersDeleted();
                 }
                 }/>
        </li>
        <li className="window-letters__header-part">
          <input type="button" name="spamButton" value="Это спам!" className="window-letters__header-buttons"/>
        </li>
        <li className="window-letters__header-part">
          <input type="button" name="readButton" value="Прочитано" className="window-letters__header-buttons"/>
        </li>
        <li className="window-letters__header-part">
          <input type="button" name="themeButton" value="Другая тема" className="window-letters__header-buttons"
            onClick={() => {
              this.props.changeColor();
            }
           }/>
        </li>

      </ul>
    );
  }

}
