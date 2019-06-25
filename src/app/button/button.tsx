import *as React from 'react';

import styles from './button.module.css';
import classnames from 'classnames';

interface IProps {
  name: string;
}

export class Button extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <li className={styles.button__textMenu}>
        <a href="#" className={classnames(styles.button_unhighlight, styles.button__delLine)}>
          {this.props.name}
        </a>
      </li>
    );
  }
}
