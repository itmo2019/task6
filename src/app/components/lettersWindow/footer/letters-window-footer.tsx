import * as React from 'react';

import styles from './letters-window-footer.module.css';

interface IProps {
  bLight: boolean;
}

export const LettersWindowFooter: React.FunctionComponent<IProps> = props => {
  const linkClass = `${styles.link} ${props.bLight ? styles['link-light'] : styles['link-dark']}`;
  return (
    <footer className={styles.main}>
      <a
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
        href="https://yandex.ru/adv/"
      >
        Помощь и обратная связь
      </a>
      <a
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
        href="https://yandex.ru/support/mail/"
      >
        Реклама
      </a>
      <a className={linkClass} target="_blank" rel="noopener noreferrer" href="https://yandex.ru/">
        &copy; 2001 - 2018, Яндекс
      </a>
    </footer>
  );
};
