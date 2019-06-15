import *as React from 'react';

import styles from'./openLetter.module.css';
import cross from '../images/cross.png';
import classnames from 'classnames';

interface IProps {
  contentLetter: string[];
  closeLetter: () => void;
  isDark: boolean;
}

export class OpenLetter extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;
  
  render() {
    return (
      <div>
        <a className={classnames(styles.openLetter__close, styles.openLetter__delLine)} href="#">
          <img className={this.props.isDark ? styles.openLetter__cross_dark : styles.openLetter__cross} alt="" src={cross} onClick={this.props.closeLetter} />
        </a>
        <div className={this.props.isDark ? styles.openLetter__textLetter_dark : styles.openLetter__textLetter}>{this.props.contentLetter.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}</div>
      </div>
    );
  }
}
