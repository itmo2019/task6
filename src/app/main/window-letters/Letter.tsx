import React, { Component, RefObject } from 'react';
import cn from 'classnames';
import styles from './Letter.module.css';

interface IProps {
  classS: string;
  id: number;
  isDark: boolean;
  letterChose: (a: number) => void;
  color: string;
  openArticle: (a: number) => void;
  chose: boolean;
  sender: string;
  letterText: string;
  date: string;
  markNotNew: (a: number) => void;
}

export class Letter extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
    this.markerRef = React.createRef();
  }

  private markerRef: RefObject<HTMLLIElement>;

  public render() {
    window.setTimeout(() => {
        if (this.markerRef.current !== null) {
          if (this.props.classS === 'add') {
            this.markerRef.current.className = styles.letter_add;
            window.setTimeout(() => {
                this.props.markNotNew(this.props.id);
              }, // .bind(this)
              1000);
          } else if (this.props.classS === 'delete') {
              this.markerRef.current.className = styles.letter_delete;
            } else {
              this.markerRef.current.className = styles.letter_notNew;
            }
          }
      }, // .bind(this)
      10
    );

    const myStyle = { backgroundColor: this.props.color };
    const darkClass = cn(styles.letterInnerior, {
      [styles.darkSide]: this.props.isDark
    });
    const sqBut = cn(styles.squareForButton, styles.letterPart);

    return (
      <li className={styles.letter} ref={this.markerRef}>
        <input
          id={this.props.id.toString()}
          className={styles.not_show}
          type="checkbox"
          onChange={() => this.props.openArticle(this.props.id)}
        />
        <label htmlFor={this.props.id.toString()}>
          <ul className={darkClass}>
            <li className={sqBut}>
              <label>
                <input
                  type="checkbox"
                  className={styles.inputButton}
                  onChange={() => this.props.letterChose(this.props.id)}
                  checked={this.props.chose}
                />
                <div className={styles.selectButton}></div>
              </label>
            </li>
            <li className={cn(styles.letterSender_pict_wrap, styles.letterPart)}>
              <div className={styles.letterSender_pict} style={myStyle}>
                {this.props.sender[0]}
              </div>
            </li>
            <li className={cn(styles.letterSender, styles.letterPart)}>{this.props.sender}</li>
            <li className={cn(styles.letterUnreadPoint, styles.letterPart)} />
            <label
              htmlFor={this.props.id.toString()}
              className={cn(styles.letterText, styles.letterPart)}
            >
              {this.props.letterText}
            </label>
            <li className={cn(styles.letterDate, styles.letterPart)}>{this.props.date}</li>
          </ul>
        </label>
      </li>
    );
  }
}
