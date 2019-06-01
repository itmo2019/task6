import *as React from 'react';

import classnames from 'classnames';
import styles from './letterPage.module.css';
import cross from '../../../../header/images/cross.png';

interface IProps {
  text: string[];
  closeLetter: () => void;
  isDark: boolean;
}

export class LetterPage extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <div>
        <a className={classnames(styles.letterPage__close, styles.letterPage__delLine)} href="#" onClick={this.props.closeLetter}>
          <img className={this.props.isDark ? styles.letterPage__cross_dark : styles.letterPage__cross} alt="" src={cross} />
        </a>
        <div className={this.props.isDark ? styles.letterPage__textLetter_dark : styles.letterPage__textLetter}>
          {this.props.text.map((paragraph, index) => {
            return <p key={index.toString()}>{paragraph}</p>;
          })}
        </div>
      </div>
    );
  }
}
