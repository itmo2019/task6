import *as React from 'react';

import styles from './newLetterButton.module.css';

interface IProps {
  onClick: () => void;
}

export class NewLetterButton extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <button className={styles.leftMenu__button} onClick={this.props.onClick}>
        <span className={styles.leftMenu__textWrite}>Написать</span>
      </button>
    );
  }
}
