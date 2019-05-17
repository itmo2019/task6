import React, { Component } from 'react';

import * as styles from './messageMenu.module.css';
import * as pageStyles from '../page/page.module.css';

interface MessageMenuProps {
  deleteMessages: () => void
}

export class MessageMenu extends Component<MessageMenuProps> {


  constructor(props: MessageMenuProps) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.messageMenu}>
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
