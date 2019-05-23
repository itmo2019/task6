import React, { Component } from 'react';

import styles from './contentHeaderMenuButton.module.css';

interface IProps {
  onClick: () => void;
  name: string;
}

export class ContentHeaderMenuButton extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div className={styles.contentHeaderMenu__button}>
        <a
          href="#"
          className={styles.contentHeaderMenu__button_defaultLink}
          onClick={this.props.onClick}
        >
          {this.props.name}
        </a>
      </div>
    );
  }
}
