import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './actions.module.css';


interface IActionsProps {
  addLetter: () => void;
}

export class Actions extends Component<IActionsProps> {
  constructor(props: IActionsProps) {
    super(props);
    this.addLetter = this.addLetter.bind(this);
  }

  addLetter() {
    this.props.addLetter();
  }

  render() {
    return (
      <div className={styles.actions}>
        <ul>
          <li>
            <input
              type="button"
              id={styles['actions__button-write']}
              onClick={this.addLetter}
              name="write"
              value="Написать"
            />
          </li>
          <a href="." className={styles.actions__acts}>
            <li
              className={classNames(styles['actions__not-writing'], styles['actions__msgs-income'])}
            >
              Входящие
            </li>
          </a>
          <a href="." className={styles.actions__acts}>
            <li className={styles['actions__not-writing']}>Отправленные</li>
          </a>
          <a href="." className={styles.actions__acts}>
            <li className={styles['actions__not-writing']}>Удалённые</li>
          </a>
          <a href="." className={styles.actions__acts}>
            <li className={styles['actions__not-writing']}>Спам</li>
          </a>
          <a href="." className={styles.actions__acts}>
            <li className={styles['actions__not-writing']}>Черновики</li>
          </a>
          <a href="." className={styles.actions__acts}>
            <li className={styles['actions__not-writing']}>Создать папку</li>
          </a>
        </ul>
      </div>
    );
  }
}
