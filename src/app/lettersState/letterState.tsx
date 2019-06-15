import *as React from 'react';

import classnames from 'classnames';
import styles from './letterState.module.css';
import { OpenLetter } from '../openLetter';
import { AllLetters } from '../allLetters';
import { ILetter } from '../letterTypes/letterTypes';

interface IProps {
  deleteChosenLetter: (id: number) => void;
  visibleLetters: ILetter[];
  markedLetters: {[id: string]: boolean};
  switchLetterCheckbox: (id: number) => void;
  isDark: boolean;
}

interface IState {
  openLetter: boolean;
  contentLetter: string[];
}

export class LetterState extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
    this.state = {
      openLetter: false,
      contentLetter: []
    };
    this.openLetter = this.openLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
  }
  
  public readonly props: IProps;
  public readonly state: IState;

  openLetter(text: string[]) {
    this.setState({
      openLetter: true,
      contentLetter: text
    });
  }

  closeLetter() {
    this.setState({
      openLetter: false
    });
  }

  render() {
    return this.state.openLetter ? (
      <div className={classnames(styles.letterState, styles.letterState_show)}>
        <OpenLetter contentLetter={this.state.contentLetter} closeLetter={this.closeLetter} isDark={this.props.isDark}/>
      </div>
    ) : (
      <div className={classnames(styles.letterState, styles.letterState_show)}>
        <AllLetters
          isDark={this.props.isDark}
          deleteChosenLetter={this.props.deleteChosenLetter}
          switchLetterCheckbox={this.props.switchLetterCheckbox}
          visibleLetters={this.props.visibleLetters}
          openLetter={this.openLetter}
          markedLetters={this.props.markedLetters}
        />
      </div>
    );
  }
}
