import React from 'react';

import styles from './letters-window-footer.module.css';

export function LettersWindowFooter() {
  return (
    <footer className={styles.main}>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://yandex.ru/adv/"
      >
        Помощь и обратная связь
      </a>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://yandex.ru/support/mail/"
      >
        Реклама
      </a>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://yandex.ru/"
      >
        &copy; 2001 - 2018, Яндекс
      </a>
    </footer>
  );
}
