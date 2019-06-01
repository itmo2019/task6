import *as React from 'react';

import classnames from 'classnames';
import styles from './mainContent.module.css';
import { LetterPage } from './letterPage';
import { Letters } from './letters';
import {ILetter} from '../../../types/type';

interface IProps {
  searchText: string;
 removeAnimation: (id: number) => void;
 deleteLetter: (id: number) => void;
 letters: ILetter[];
 checkedLetterIds: {[id: string]: boolean};
 changeCheckbox: (id: number) => void;
 isDark: boolean;
}

interface IState {
  isLetterOpened: boolean;
  openedLetterText: string[];
}

export class MainContent extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
    this.state = {
      isLetterOpened: false,
      openedLetterText: []
    };
    this.closeLetter = this.closeLetter.bind(this);
    this.openLetter = this.openLetter.bind(this);
  }

  openLetter(text: string[]) {
    this.setState({
      isLetterOpened: true,
      openedLetterText: text
    });
  }

  closeLetter() {
    this.setState({
      isLetterOpened: false,
      openedLetterText: null
    });
  }

  public readonly props: IProps;
  public readonly state: IState;

  render() {
    return this.state.isLetterOpened ? (
      <div className={classnames(styles.mainContent, styles.mainContent_show)}>
        <LetterPage text={this.state.openedLetterText} closeLetter={this.closeLetter} isDark={this.props.isDark}/>
      </div>
    ) : (
      <div className={classnames(styles.mainContent, styles.mainContent_show)}>
        <Letters
          searchText={this.props.searchText}
          isDark={this.props.isDark}
          removeAnimation={this.props.removeAnimation}
          deleteLetter={this.props.deleteLetter}
          letters={this.props.letters}
          openLetter={this.openLetter}
          checkedLetterIds={this.props.checkedLetterIds}
          changeCheckbox={this.props.changeCheckbox}
        />
      </div>
    );
  }
}
