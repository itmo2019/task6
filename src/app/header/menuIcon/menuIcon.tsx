import React, { Component } from 'react';

const utilCss = require('util/UtilCss.module.css')
const styles = require('./MenuIcon.module.css')
const icon = require('./resources/icon.png')

export class MenuIcon extends Component {
  render() {
    return (
      <div className={[styles.menuIcon, utilCss.noselect].join(' ')}>
        <img className={styles.img} draggable={false} src={icon} alt={icon} />
      </div>
    );
  }
}
