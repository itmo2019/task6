import React, { Component } from 'react';

import styles from './contentFooterText.module.css';

interface IProps {
  text: string;
}

export class ContentFooterText extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return <div className={styles.contentFooter__text}>{this.props.text}</div>;
  }
}
