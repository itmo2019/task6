import *as React from 'react';

import styles from './contentFooterText.module.css';
import classnames from 'classnames';


interface IProps {
  text: string;
}

export class ContentFooterText extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <span className={styles.contentFooterText__textEndline}><a className={classnames(styles.contentFooterText__delLine, styles.contentFooterTextUnhighlight)}>{this.props.text}</a></span>
    );
  }
}
