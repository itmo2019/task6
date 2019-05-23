import * as React from 'react';

import * as styles from './letterHead.module.css';
import * as pageStyles from '../page/page.module.css';

interface ILetterHeadProps {
  id: string;
  authorName: string;
  authorImage: string;
  letterText: string[];
  headText: string;
  isVisible: boolean;
  isChecked: boolean;
  checkboxChange: (id: string) => void;
  setText: (text: string[]) => void;
  addAnimation: boolean;
  removeAddAnimation: (id: string) => void;
  removeDeleteAnimation: (id: string) => void;
  deleteAnimation: boolean;
  isRead: boolean;
  setRead: (id: string) => void;
  showLetter: () => void;
  headTagDate: string;
  headDate: string;
  theme: boolean;
}

export class LetterHead extends React.Component<ILetterHeadProps> {
  public constructor(props: ILetterHeadProps) {
    super(props);

    this.makeClassName = this.makeClassName.bind(this);
    this.makeLinkClassName = this.makeLinkClassName.bind(this);
    this.deleteAnimation = this.deleteAnimation.bind(this);
    this.getAuthorNameClass = this.getAuthorNameClass.bind(this);
    this.getTextClass = this.getTextClass.bind(this);
    this.getDateClass = this.getDateClass.bind(this);
    this.getLineClass = this.getLineClass.bind(this);
  }

  private makeClassName() {
    if (this.props.addAnimation) {
      return styles.animatedAddLine;
    }

    if (this.props.deleteAnimation) {
      return styles.animatedDeleteLine;
    }

    if (!this.props.isVisible) {
      return styles.hidden;
    }

    return styles.letterHead;
  }

  private makeLinkClassName() {
    if (this.props.isRead) {
      if (!this.props.theme) {
        return styles.unread;
      }
      return styles.unreadDark;
    }
    return styles.link;
  }

  private deleteAnimation() {
    if (this.props.addAnimation) {
      this.props.removeAddAnimation(this.props.id);
    }
    if (this.props.deleteAnimation) {
      this.props.removeDeleteAnimation(this.props.id);
    }
  }

  private getAuthorNameClass() {
    return !this.props.theme ? styles.authorName : styles.authorNameDark;
  }

  private getTextClass() {
    return !this.props.theme ? styles.text : styles.textDark;
  }

  private getDateClass() {
    return !this.props.theme ? styles.date : styles.dateDark;
  }

  private getLineClass() {
    return !this.props.theme ? pageStyles.line : pageStyles.lineDark;
  }

  public render() {
    return (
      <li className={this.makeClassName()} onAnimationEnd={this.deleteAnimation}>
        <label htmlFor={`${this.props.id}-checkbox`}>
          <input
            id={`${this.props.id}-checkbox`}
            className={styles.myCheckbox}
            type="checkbox"
            checked={this.props.isChecked}
            onChange={() => this.props.checkboxChange(this.props.id)}
          />
        </label>
        <a
          href="#"
          className={this.makeLinkClassName()}
          onClick={() => {
            this.props.setText(this.props.letterText);
            this.props.showLetter();
            this.props.setRead(this.props.id);
          }}
        >
          <img className={styles.authorImage} src={this.props.authorImage} alt="author logo" />
          <div className={this.getAuthorNameClass()}>
            <p className={pageStyles.myText}>{this.props.authorName}</p>
          </div>
          <div className={styles.read} />
          <div className={this.getTextClass()}>
            <p className={pageStyles.myText}>{this.props.headText}</p>
          </div>
          <div className={this.getDateClass()}>
            <time dateTime={this.props.headTagDate}>
              <p>{this.props.headDate}</p>
            </time>
          </div>
        </a>
        <div className={this.getLineClass()} />
      </li>
    );
  }
}
