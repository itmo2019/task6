import *as React from 'react';

import styles from './openLetter.module.css';
import cross from '../images/cross.png';
import classnames from 'classnames';
import { ILetter } from '../letterTypes/letterTypes';
import { LetterSmall } from '../LetterSmall/letterSmall';

interface IProps {
  markedLetters: { [id: string]: boolean };
  switchLetterCheckbox: (id: number) => void;
  openLetter: (text: string[]) => void;
  deleteChosenLetter: (id: number) => void;
  visibleLetters: ILetter[];
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
    return  (
      <div>
        <div className={styles.allLetters}>
          {this.props.visibleLetters.map(letter => {
            return (
              <LetterSmall
                isDark={this.props.isDark}
                key={letter.id}
                id={letter.id}
                text={letter.text}
                author={letter.author}
                subject={letter.subject}
                date={letter.date}
                changeAnimation={letter.changeAnimation}
                switchLetterCheckbox={this.props.switchLetterCheckbox}
                deleteChosenLetter={this.props.deleteChosenLetter}
                isSelected={this.props.markedLetters[letter.id]}
                openLetter={this.props.openLetter}
              />
            );
          })}
        </div>
        <div className={styles.width}>
          <a className={classnames(styles.openLetter__close, styles.openLetter__delLine)} href="#">
            <img className={this.props.isDark ? styles.openLetter__cross_dark : styles.openLetter__cross} alt=""
                 src={cross} onClick={this.props.closeLetter}/>
          </a>
          <div
            className={this.props.isDark ? styles.openLetter__textLetter_dark : styles.openLetter__textLetter}>{this.props.contentLetter.map((paragraph) => {
            return <p>{paragraph}</p>;
          })}</div>
        </div>
      </div>
    );
  }
}
