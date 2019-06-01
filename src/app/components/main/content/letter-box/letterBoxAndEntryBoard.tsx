import * as React from 'react';
import styles from './letterBoxAndEntryBoard.module.css';
import { LetterLine } from './letter-line/letterLine';
import { ILetter } from '../../../../letterUtils';

interface IProps {
  nightMode: boolean;
  letters: ILetter[];
  check: (id: string) => void;
}

interface IState {
  letterText: string;
  letters: ILetter[];
  opened: boolean;
}

export class LetterBoxAndEntryBoard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      letterText: '',
      letters: [],
      opened: false
    };
    this.openLetter = this.openLetter.bind(this);
  }

  openLetter(text: string) {
    this.setState({ opened: true, letterText: text });
  }

  render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : '';
    return this.state.opened ? (
      <div className={`${styles['letter-entry-board']} ${color}`}>
        <div
          onKeyPress={undefined}
          role="button"
          aria-hidden
          className={`${styles['close-icon']} ${color}`}
          onClick={() => {
            this.setState({ opened: false });
          }}
        >
          𐄂
        </div>
        <div className={`${styles.text} ${color}`}>{this.state.letterText}</div>
      </div>
    ) : (
      <div className={`${styles['letter-line-box']} ${color}`}>
        {this.props.letters.map(letterData => (
          <LetterLine
            nightMode={nightMode}
            letterData={letterData}
            openLetter={this.openLetter}
            check={this.props.check}
          />
        ))}
      </div>
    );
  }
}
