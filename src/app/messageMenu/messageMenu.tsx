import React, { Component } from 'react';

import * as styles from './messageMenu.module.css';
import * as pageStyles from '../page/page.module.css';

export class MessageMenu extends Component {

  public readonly props: {deleteMessages: () => void};

  constructor(props: { deleteMessages: () => void }) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <ul className={styles.className}>
        <li className={styles.text}>
          <a href="." className={styles.link}>
            <p className={pageStyles.myText}>Переслать</p>
          </a>
        </li>
        <li className={styles.text}>
          <a
            href="#"
            className={styles.link}
            onClick={() => this.props.deleteMessages()}
          >
            <p className={pageStyles.myText}>Удалить</p>
          </a>
        </li>
        <li className={styles.text}>
          <a href="." className={styles.link}>
            <p className={pageStyles.myText}>Это спам!</p>
          </a>
        </li>
        <li className={styles.text}>
          <a href="." className={styles.link}>
            <p className={pageStyles.myText}>Прочитанно</p>
          </a>
        </li>
      </ul>
    );
  }
}
