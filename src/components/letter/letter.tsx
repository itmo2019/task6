import React, { Component } from 'react';
import cx from 'classnames';
import Check from '../check/check';
import Hr from '../letterBox/hr';
import LetterItem from './letterItem'

import styles from './letter.module.css';

type Props = {
  className?: string,
  authorLogo: JSX.Element,
  authorName: string,
  topic: string,
  date: JSX.Element,
  isUnread: boolean,
  isChecked: boolean,
  hiddenMail: boolean,
  hasRemoveAnimation: boolean
  handleMailClick: () => void,
  handleMailCheckClick: () => void,
  theme: string
}

type State = {
  hasAddAnimation: boolean
}

export default class Letter extends Component<Props, State> {
  static displayName = 'Letter';

  DELTA_TIME = 20;

  timerID: NodeJS.Timeout = setTimeout(() => {}, 0);

  constructor(props: Props) {
    super(props);

    this.state = {
      hasAddAnimation: false
    };
  }

  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.setState({ hasAddAnimation: true });
    }, this.DELTA_TIME);
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  render() {
    // console.log('Letter');
    const {
      className,
      authorLogo,
      authorName,
      topic,
      date,
      handleMailClick,
      handleMailCheckClick,
      hiddenMail,
      hasRemoveAnimation,
      isUnread,
      isChecked,
      theme
    } = this.props;
    const { hasAddAnimation } = this.state;
    const letterClassName = cx(styles.box, className, {
      [styles.box_hasAddAnimation]: hasAddAnimation,
      [styles.box_hasRemoveAnimation]: hasRemoveAnimation
    });
    const readMarkClassName = cx(styles.readMark, {
      [styles.readMark_unread]: isUnread
    });
    const lineClassName = cx(styles.line, styles['line_theme_' + theme], {
      [styles.line_unread]: isUnread
    });
    return (
      <li className={letterClassName} hidden={hiddenMail}>
        <ul className={lineClassName}>
          <LetterItem>
            <Check onChange={handleMailCheckClick} isChecked={isChecked} />
          </LetterItem>
          <LetterItem className={styles.author}>{authorLogo}</LetterItem>
          <LetterItem className={styles.authorName}>{authorName}</LetterItem>
          <LetterItem className={readMarkClassName} />
          <LetterItem className={styles.topic}>{topic}</LetterItem>
          <LetterItem className={styles.date}>{date}</LetterItem>
        </ul>
        <a className={styles.linkOpen} onClick={handleMailClick} />
        <Hr />
      </li>
    );
  }
}
