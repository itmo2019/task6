import React from 'react';

import styles from './footer.module.css';

class Footer extends React.Component{
  render() {
    return (
      <div className={styles.footer}>
        <ul className={styles['footer__links-list']}>
          <li className={styles['link-container']}>
            <a className={styles['footer-link']} href="#" onClick={(click) => {
              click.preventDefault();
            }}>
              Помощь и обратная связь
            </a>
          </li>
          <li className={styles['link-container']}>
            <a className={styles['footer-link']} href="#" onClick={(click) => {
              click.preventDefault();
            }}>
              Реклама
            </a>
          </li>
          <li className={styles['link-container']}>
            <a className={styles['footer-link']} href="#" onClick={(click) => {
              click.preventDefault();
            }}>
              © 2001—2018, Яндекс
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
