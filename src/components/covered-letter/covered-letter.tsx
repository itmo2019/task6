import React, { Component, RefObject } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styles from './CoveredLetter.module.css';
import { ILetter, LetterActionTypes, MailBoxActionTypes } from '../../reducers/types';
import { openLetter, receiveAnimationLetter } from '../../actions/actions';
import Checkbox from '../checkbox/checkbox';

interface ICoveredLetter {
  letter: ILetter;
  dispatch: Dispatch<MailBoxActionTypes | LetterActionTypes>;
}

class CoveredLetter extends Component<ICoveredLetter> {
  public constructor(props: ICoveredLetter) {
    super(props);
    this.letterAnimationDivRef = React.createRef();
  }

  public componentWillUnmount(): void {
    this.props.dispatch(receiveAnimationLetter(this.props.letter.id));
  }

  private readonly letterAnimationDivRef: RefObject<HTMLDivElement>;

  public render() {
    const shownClass = this.props.letter.showing ? styles.addLetterAnimation : '';
    const removedClass = this.props.letter.removing ? styles.removeLetterAnimation : '';
    return (
      <div
        className={`${styles.coveredLetter} ${shownClass} ${removedClass}`}
        ref={this.letterAnimationDivRef}
        onAnimationEnd={() => {
          if (this.props.letter.removing) {

          }
        }}
      >
        <Checkbox id={`${this.props.letter.id}`} checked={this.props.letter.checked} />

        <div className={styles.miniLogoWrapper}>
          <img
            className={styles.miniSenderPic}
            /* eslint-disable-next-line global-require, import/no-dynamic-require */
            src={require(`../../resources/images/${this.props.letter.senderImage}`)}
            alt={this.props.letter.sender}
          />
        </div>
        <div
          className={`${styles.clickToOpenWrapper} ${styles.notReadMark}`}
          // TODO: onClick={} // add boolean isRead and check it
          onClick={() => {
            this.props.dispatch(openLetter(this.props.letter));
          }}
          onKeyPress={() => {
            this.props.dispatch(openLetter(this.props.letter));
          }}
          role="button"
          tabIndex={0}
        >
          <div
            className={`${styles.senderName} ${styles.letterItem} ${
              styles.mainContentDistinguished
            }`}
          >
            {this.props.letter.sender}
          </div>
          <div className={`${styles.isReadMarkNotRead} ${styles.letterItem}`} />
          <div
            className={`${styles.titleText} ${styles.letterItem} ${
              styles.mainContentDistinguished
            }`}
          >
            {this.props.letter.letterTheme}
          </div>
          <div
            className={`${styles.dateInfo} ${styles.letterItem} ${styles.mainContentDistinguished}`}
          >
            {this.props.letter.date}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CoveredLetter);