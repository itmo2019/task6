import React, { Component } from 'react';
import classNames from 'classnames';
import { ThemeContext, Theme } from '../theme-context';

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
    let theme = this.context;
    let fl = false;
    if (theme === Theme.night) {
      fl = true;
    }
    return (
      <div className={classNames(styles.actions, fl ? styles.night : '')}>
        <ul>
          <li>
            <input
              type="button"
              id={styles['actions__button-write']}
              className={fl ? styles['actions__button-write_night'] : ''}
              onClick={this.addLetter}
              name="write"
              value="Написать"
            />
          </li>
          <a href="." className={styles.actions__acts}>
            <li
              className={classNames(
                styles['actions__not-writing'],
                styles['actions__msgs-income'],
                fl ? styles['actions__not-writing_night'] : '')}
            >
              Входящие
            </li>
          </a>
          <a href="." className={styles.actions__acts}>
          <li
            className={classNames(
              styles['actions__not-writing'],
              fl ? styles['actions__not-writing_night'] : '')}
            >Отправленные</li>
          </a>
          <a href="." className={styles.actions__acts}>
          <li
          className={classNames(
              styles['actions__not-writing'],
              fl ? styles['actions__not-writing_night'] : '')}
            >Удалённые</li>
          </a>
          <a href="." className={styles.actions__acts}>
          <li
          className={classNames(
              styles['actions__not-writing'],
              fl ? styles['actions__not-writing_night'] : '')}
            >Спам</li>
          </a>
          <a href="." className={styles.actions__acts}>
          <li
          className={classNames(
              styles['actions__not-writing'],
              fl ? styles['actions__not-writing_night'] : '')}
            >Черновики</li>
          </a>
          <a href="." className={styles.actions__acts}>
          <li
          className={classNames(
              styles['actions__not-writing'],
              fl ? styles['actions__not-writing_night'] : '')}
            >Создать папку</li>
          </a>
        </ul>
      </div>
    );
  }
}

Actions.contextType = ThemeContext;
