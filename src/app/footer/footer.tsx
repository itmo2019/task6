import *as React from 'react';

import styles from './footer.module.css';
import classnames from 'classnames';

export class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <span className={styles.footerText__textEndline}><a className={classnames(styles.footerText__delLine, styles.footerText_unhighlight)} href="#">&copy; 2001 - 2018, Яндекс</a></span>
        <span className={styles.footerText__textEndline}><a className={classnames(styles.footerText__delLine, styles.footerText_unhighlight)} href="#">Реклама</a></span>
        <span className={styles.footerText__textEndline}><a className={classnames(styles.footerText__delLine, styles.footerText_unhighlight)} href="#">Помощь и обратная связь</a></span>
      </div>
    );
  }
}
