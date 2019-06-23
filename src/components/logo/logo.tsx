import React, { Component } from 'react';

import utilCss from '../../util/UtilCss.module.css';
import styles from './Logo.module.css';

const logo = require('../../resources/images/mail.png');

export class Logo extends Component {
  public render() {
    return (
      <div className={[styles.logo, utilCss.noselect].join(' ')}>
        <img className={styles.img} draggable={false} alt={logo} src={logo} />
      </div>
    );
  }
}
