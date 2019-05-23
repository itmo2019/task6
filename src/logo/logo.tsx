import React, { Component } from 'react';

import styles from './Logo.module.css';
import ThreeLines from '../three-lines/three-lines';
import Name from '../name/name';

interface IProps {
  theme: string;
}

export default class Logo extends Component<IProps, {}> {
  public render() {
    return (
      <div className={styles.logo}>
        <ThreeLines theme={this.props.theme}/>
        <Name theme={this.props.theme}/>
      </div>
    );
  }
}
