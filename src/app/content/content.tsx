import React, { Component } from 'react';

const styles = require('./Content.module.css')
const utilCss = require('util/UtilCss.module.css')

import { LetterData, randomLetterData } from '../../util/random/random.js';
import { LetterHeader } from './letterHeader'
import { LetterList } from './letterList'

interface IContentProps {
  masterChecked: boolean;
  toggleMasterSelection: () => void;
  markDeleteSelectedLetters: () => void;
  selectLetter: (a: number) => void;
  removeLetter: (a: number) => void;
  letterShown: (a: number) => void;
  letters: LetterData[];
}

interface IContentState {
  letterOpened: boolean;
  letterTheme: string;
  letterText: string;
}

export class Content extends Component<IContentProps, IContentState> {
  constructor(props: IContentProps) {
    super(props);

    this.state = {
      letterOpened: false,
      letterTheme: '',
      letterText: ''
    }

    this.openLetter = this.openLetter.bind(this)
    this.closeLetter = this.closeLetter.bind(this)
  }


  openLetter(theme: string, text: string): void {
    console.log(theme, text)
    this.setState({
      letterOpened: true,
      letterTheme: theme,
      letterText: text
    });
  }

  closeLetter(): void {
    this.setState({
      letterOpened: false,
      letterTheme: '',
      letterText: ''
    });
  }

  render() {
    return (
      <main className={styles.content}>
        <LetterHeader
          letterOpened={this.state.letterOpened}
          masterChecked={this.props.masterChecked}
          toggleMasterSelection={this.props.toggleMasterSelection}
          markDeleteSelectedLetters={this.props.markDeleteSelectedLetters}
        />
        <div className={utilCss.separator} />
        <LetterList
          letterOpened={this.state.letterOpened}
          letterTheme={this.state.letterTheme}
          letterText={this.state.letterText}
          selectLetter={this.props.selectLetter}
          openLetter={this.openLetter}
          closeLetter={this.closeLetter}
          removeLetter={this.props.removeLetter}
          letterShown={this.props.letterShown}
          letters={this.props.letters} />
      </main>
    );
  }
}
