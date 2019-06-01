import React from 'react';

import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["footer__inline-element"]}>© 2019 – 2019, Ямдекс</div>
      <div className={styles["footer__inline-element"]}>
        <a className={styles.footer__link} href="http://www.milliondollarhomepage.com/">
          Реклама
        </a>
      </div>
      <div className={styles["footer__inline-element"]}>
        <a
          className={styles.footer__link}
          href="mailto:yakovlev.ilya.v@gmail.com?Subject=Help"
          target="_top"
        >
          Помощь и обратная связь
        </a>
      </div>
    </div>
  );
}

export default Footer;
