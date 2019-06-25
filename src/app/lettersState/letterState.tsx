import *as React from 'react';

import classnames from 'classnames';
import styles from './letterState.module.css';
import { OpenLetter } from '../openLetter';
import { AllLetters } from '../allLetters';
import { ILetter } from '../letterTypes/letterTypes';
import cross from '../images/cross.png';

interface IProps {
  create: boolean;
  deleteChosenLetter: (id: number) => void;
  visibleLetters: ILetter[];
  markedLetters: { [id: string]: boolean };
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
    return this.props.create ? (
      <div className={classnames(styles.letterState, styles.letterState_show)}>
        <div className={styles.search}>
          <input className={styles.search__textSearch} type="text" placeholder="Ввведите тему письма"/>
        </div>
        <div className={styles.search}>
          <input className={styles.search__textSearch} type="text" placeholder="Ввведите текст письма"/>
        </div>
      </div>
    ) : (this.state.openLetter ? (
      <div className={classnames(styles.letterState, styles.letterState_show)}>
        <OpenLetter
          deleteChosenLetter={this.props.deleteChosenLetter}
          switchLetterCheckbox={this.props.switchLetterCheckbox}
          visibleLetters={this.props.visibleLetters}
          openLetter={this.openLetter}
          markedLetters={this.props.markedLetters}
          contentLetter={this.state.contentLetter}
          closeLetter={this.closeLetter}
          isDark={this.props.isDark}/>
      </div>
    ) : (
      <div className={classnames(styles.letterState, styles.letterState_show)}>
        <AllLetters
          create={this.props.create}
          isDark={this.props.isDark}
          deleteChosenLetter={this.props.deleteChosenLetter}
          switchLetterCheckbox={this.props.switchLetterCheckbox}
          visibleLetters={this.props.visibleLetters}
          openLetter={this.openLetter}
          markedLetters={this.props.markedLetters}
        />
      </div>
    ));
  }
}
