import * as React from 'react';
import styles from './letterLine.module.css';
import { ILetter } from '../../../letterUtils';

interface IProps {
  nightMode: boolean;
  letterData: ILetter;
  openLetter: (id: string) => void;
  check: (letter: string) => void;
}

export class LetterLine extends React.Component<IProps> {
  public constructor(props: IProps) {
    super(props);
    this.check = this.check.bind(this);
  }

  private check(e: React.ChangeEvent<HTMLInputElement>) {
    const letterId = e.target.id;
    this.props.check(letterId);
  }

  public render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : '';
    const { letterData } = this.props;
    const animation =
      (letterData.arrive ? ` ${styles.arrive}` : '') + (letterData.remove ? ` ${styles.remove}` : '');
    return (
      <div
        onKeyPress={undefined}
        role="button"
        aria-hidden
        className={`${styles['letter-line']}${animation} ${color}`}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          if ((event.target as HTMLInputElement).className !== styles.check) {
            this.props.openLetter(letterData.text);
          }
        }}
        style={letterData.display ? {} : { display: 'none' }}
      >
        <input
          className={styles.check}
          type="checkbox"
          checked={letterData.isChecked}
          id={letterData.id}
          onChange={this.check}
        />
        <img className={`${styles['sender-logo']} ${color}`} src={letterData.logo} alt={letterData.sender} />
        <div className={`${styles['sender-name']} ${styles['sender-name_unread']} ${color}`}>
          {letterData.sender}
        </div>
        <div className={`${styles.mark} ${styles.mark_unread} ${color}`} />
        <div className={`${styles.title} ${styles.title_unread} ${color}`}>{letterData.title}</div>
        <div className={`${styles.date} ${color}`}>{letterData.date}</div>
      </div>
    );
  }
}
