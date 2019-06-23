import React, { Component } from 'react';

import styles from './Content.module.css';
import utilCss from '../../util/UtilCss.module.css';
import { IThemeContext, ThemeContext } from '../app';
import { LetterData } from '../../util/random/random.js';
import { LetterHeader } from '../letter-header';
import { LetterList } from '../letter-list';
import classNames from 'classnames/bind'

const c = classNames.bind(styles)

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
  public constructor(props: IContentProps) {
    super(props);

    this.state = {
      letterOpened: false,
      letterTheme: '',
      letterText: ''
    };

    this.openLetter = this.openLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
  }

  private openLetter(theme: string, text: string): void {
    console.log(theme, text);
    this.setState({
      letterOpened: true,
      letterTheme: theme,
      letterText: text
    });
  }

  private closeLetter(): void {
    this.setState({
      letterOpened: false,
      letterTheme: '',
      letterText: ''
    });
  }

  public render() {
    return (
      <ThemeContext.Consumer>
        {(context: IThemeContext) => {
          let mainClasses = c({
            content: true,
            dark: context.isDarkTheme
          })
          return (
            <main className={mainClasses}>
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
                letters={this.props.letters}
              />
            </main>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
