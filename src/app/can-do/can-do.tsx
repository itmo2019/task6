import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './can-do.module.css';

interface ICanDoProps {
  selectAll: () => void;
  deleteLetter: () => void;
}

export class CanDo extends Component<ICanDoProps> {
  constructor(props: ICanDoProps) {
    super(props);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.selectAll = this.selectAll.bind(this);
  }

  selectAll() {
    this.props.selectAll();
  }

  deleteLetter() {
    this.props.deleteLetter();
  }

  render() {
    return (
      <ul className={classNames(`block-inner__can-do`, styles['can-do'])}>
        <input type="checkbox" id={styles['can-do__highlight']} onClick={this.selectAll} />
        <li className={styles['can-do__resend']}>
          <a href="." className={styles['can-do__links']}>
            Переслать
          </a>
        </li>
        <li className={styles['can-do__delete']}>
          <div
            className={styles['can-do__links']}
            id={styles['can-do__delete']}
            onClick={this.deleteLetter}
          >
            Удалить
          </div>
        </li>
        <li className={styles['can-do__make-spam']}>
          <a href="." className={styles['can-do__links']}>
            Это спам!
          </a>
        </li>
        <li className={styles['can-do__read-msgs']}>
          <a href="." className={styles['can-do__links']}>
            Прочитано
          </a>
        </li>
      </ul>
    );
  }
}
