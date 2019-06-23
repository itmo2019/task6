import React, { Component } from 'react';

import utilCss from '../../util/UtilCss.module.css';
import styles from './MenuIcon.module.css';

const icon = require('../../resources/images/icon.png');

export class MenuIcon extends Component {
  public render() {
    return (
      <div className={[styles.menuIcon, utilCss.noselect].join(' ')}>
        <img className={styles.img} draggable={false} src={icon} alt={icon} />
      </div>
    );
  }
}
