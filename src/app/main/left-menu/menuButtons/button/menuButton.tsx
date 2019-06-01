import *as React from 'react';

import styles from './menuButton.module.css';
import classnames from 'classnames';

interface IProps {
  name: string;
}

export class MenuButton extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <li className={styles.leftMenu__textMenu}>
        <a href="#" className={classnames(styles.mainPartUnhighlight, styles.mainPart__delLine)}>
          {this.props.name}
        </a>
      </li>
    );
  }
}
