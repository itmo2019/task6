import React, { Component } from 'react';

import styles from './allFunctions.module.css';
import { Button } from './button/button';
import classNames from 'classnames';

interface IProps {
  isLetterOpened : boolean;
  isChecked : boolean;
  newMailOnClick: () => void;
  deleteLetter: () => void;
  selectAll: () => void;
}

export class AllFunctions extends Component<IProps> {
  constructor(props : IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  doNothing = () => {};

  render() {
    return (
      <div className={classNames(styles.mainBlock__mailFunctions, styles.clearfix)}>
        <input
          type="checkbox"
          className={styles.check}
          checked={this.props.isChecked}
          onChange={() => {
            if (!this.props.isLetterOpened) this.props.selectAll();
          }}
        />
        <ul className={styles.mainBlock__allFunctions}>
          <li className={styles.mainBlock__func}>
            <Button
              id="get-letter"
              isLetterOpened={this.props.isLetterOpened}
              action={this.props.newMailOnClick}
              title="Получить"
            />
          </li>
          <li className={styles.mainBlock__func}>
            <Button
              id="remove"
              isLetterOpened={this.props.isLetterOpened}
              action={this.props.deleteLetter}
              title="Удалить"
            />
          </li>
          <li className={styles.mainBlock__func}>
            <Button
              id="resend"
              isLetterOpened={this.props.isLetterOpened}
              action={this.doNothing}
              title="Переслать"
            />
          </li>
          <li className={styles.mainBlock__func}>
            <Button
              id="spam"
              isLetterOpened={this.props.isLetterOpened}
              action={this.doNothing}
              title="Это спам"
            />
          </li>
          <li className={styles.mainBlock__func}>
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
