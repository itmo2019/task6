import *as React from 'react';

import styles from './contentHeaderMenuButton.module.css';
import classnames from 'classnames';

interface IProps {
 onClick: () => void;
 name: string;
}

export class ContentHeaderMenuButton extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  render() {
    return (
      <a href="#" className={classnames(styles.contentHeaderMenuButton__textTitle, styles.contentHeaderMenuButton__delLine)} onClick={this.props.onClick}>
        {this.props.name}
      </a>
    );
  }
}
