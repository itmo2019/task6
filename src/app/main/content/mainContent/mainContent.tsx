import React, { Component } from 'react';

import styles from './mainContent.module.css';
import { LetterPage } from './letterPage/letterPage';
import { Letters } from './letters/letters';
import { LetterType } from '../../../types/types';

interface IProps {
  letters: LetterType[];
  checkedLetterIds: { [id: string]: boolean };
  onCheckboxChange: (id: string) => void;
  searchText: string;
  isDark: boolean;
  removeAddAnimation: (id: string) => void;
  removeLetter: (id: string) => void;
  setVisibility: (id: string, value: boolean) => void;
}

interface IState {
  isLetterOpened: boolean;
  openedLetterText: string[];
}

export class MainContent extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;

    this.state = {
      isLetterOpened: false,
      openedLetterText: []
    };

    this.openLetter.bind(this);
    this.closeLetter.bind(this);
  }

  public readonly state: IState;

  private openLetter = (text: string[]) => {
    this.setState({
      isLetterOpened: true,
      openedLetterText: text
    });
  };

  private closeLetter = () => {
    this.setState({
      isLetterOpened: false,
      openedLetterText: null
    });
  };

  public readonly props: IProps;

  public render() {
    return this.state.isLetterOpened ? (
      <div className={styles.mainContent}>
        <LetterPage text={this.state.openedLetterText} closeLetter={this.closeLetter} />
      </div>
    ) : (
      <div className={styles.mainContent}>
        <Letters
          letters={this.props.letters}
          openLetter={this.openLetter}
          checkedLetterIds={this.props.checkedLetterIds}
          onCheckboxChange={this.props.onCheckboxChange}
          searchText={this.props.searchText}
          isDark={this.props.isDark}
          removeAddAnimation={this.props.removeAddAnimation}
          removeLetter={this.props.removeLetter}
          setVisibility={this.props.setVisibility}
        />
      </div>
    );
  }
}
