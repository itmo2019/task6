import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './logo.module.css';
import light from './logo-light.png';
import dark from './logo-dark.png';
import {ThemeContext} from "../../theme/theme-context";

const b = bemify('logo', styles);

const logo: any = {
  light,
  dark
};

class Logo extends Component {
  render(): React.ReactNode {
    const theme = this.context;

    return <img className={b()} alt="logo" src={logo[theme]} width="164px" />;
  }
}

Logo.contextType = ThemeContext;


export default Logo;
