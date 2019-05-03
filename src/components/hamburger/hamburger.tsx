import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './hamburger.module.css';
import light from './hamburger-light.svg';
import dark from './hamburger-dark.svg';
import {ThemeContext} from "../../theme/theme-context";

const b = bemify('hamburger', styles);

const hamburger: any = {
  light,
  dark
};

class Hamburger extends Component {
  render(): React.ReactNode {
    const theme = this.context;

    return (
      <button type="button" className={b()}>
        <img className={b('img')} alt="hamburger icon" src={hamburger[theme]} width="25px" height="25px" />
      </button>
    );
  }
}

Hamburger.contextType = ThemeContext;

export default Hamburger;
