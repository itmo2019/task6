import React, { Component } from 'react';

import styles from './button.module.css';

interface IProps {
  action : () => void;
  id : string;
  title : string;
  isLetterOpened : boolean;
}
export class Button extends Component<IProps> {
  constructor(props : IProps ) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  render() {
    return (
      <button
        type="button"
        id={this.props.id}
        className={styles.mainBlock__refFunc}
        onClick={() => {
          if (!this.props.isLetterOpened) this.props.action();
        }}
      >
        {this.props.title}
      </button>
    );
  }
}
