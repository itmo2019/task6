import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './logo.module.css';
import logo from './logo.png';

const b = bemify('logo', styles);

class Logo extends Component {
  render(): React.ReactNode {
    return <img className={b()} alt="logo" src={logo} width="164px" />;
  }
}

export default Logo;
