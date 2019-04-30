import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './hamburger.module.css';
import hamburger from './hamburger.svg';

const b = bemify('hamburger', styles);

class Hamburger extends Component {
  render(): React.ReactNode {
    return (
      <button type="button" className={b()}>
        <img alt="hamburger icon" src={hamburger} width="25px" height="25px" />
      </button>
    );
  }
}

export default Hamburger;
