import React, { Component } from 'react';

import './allFunctions.css';
import { Button } from './Button/Button';

export class AllFunctions extends Component {
  constructor(props) {
    super(props);
    this.newMailOnClick = this.props.newMailOnClick.bind(this);
    this.deleteLetter = this.props.deleteLetter.bind(this);
    this.selectAll = this.props.selectAll.bind(this);
  }

  doNothing = () => {};

  render() {
    return (
      <div className="main-block__mail-functions clearfix">
        <input
          type="checkbox"
          className="check"
          checked={this.props.isChecked}
          onChange={() => {
            if (!this.props.isLetterOpened) this.selectAll();
          }}
        />
        <ul className="main-block__all-function">
          <li className="main-block__func">
            <Button
              id="get-letter"
              isLetterOpened={this.props.isLetterOpened}
              action={this.newMailOnClick}
              title="Получить"
            />
          </li>
          <li className="main-block__func">
            <Button
              id="remove"
              isLetterOpened={this.props.isLetterOpened}
              action={this.deleteLetter}
              title="Удалить"
            />
          </li>
          <li className="main-block__func">
            <Button
              id="resend"
              isLetterOpened={this.props.isLetterOpened}
              action={this.doNothing}
              title="Переслать"
            />
          </li>
          <li className="main-block__func">
            <Button
              id="spam"
              isLetterOpened={this.props.isLetterOpened}
              action={this.doNothing}
              title="Это спам"
            />
          </li>
          <li className="main-block__func">
            <Button
              id="read"
              isLetterOpened={this.props.isLetterOpened}
              action={this.doNothing}
              title="Прочитано"
            />
          </li>
        </ul>
      </div>
    );
  }
}
