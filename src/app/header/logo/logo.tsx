import React, { Component } from 'react';

const utilCss = require('util/UtilCss.module.css')
const styles = require('./Logo.module.css')
const logo = require('./resources/mail.png')

export class Logo extends Component {
  render() {
    return (
      <div className={[styles.logo, utilCss.noselect].join(' ')}>
        <img className={styles.img} draggable={false} alt={logo} src={logo} />
      </div>
    );
  }
}
