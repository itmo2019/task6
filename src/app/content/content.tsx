import React from 'react';

import * as styles from './content.module.css';
import * as pageStyles from '../page/page.module.css';

import { MessageMenu } from '../messageMenu/messageMenu';
import { Letters } from '../letters/letters';
import { Letter } from '../letter/letter';
import { Footer } from '../footer/footer';
import { ILetterType } from '../types/types';

interface IContentProps {
  deleteMails: () => void;
  letters: ILetterType[];
  selectAll: () => void;
  isSelectAll: boolean;
  checkboxChange: (id: string) => void;
  checked: { [id: string]: boolean };
  text: string[];
  setText: (text: string[]) => void;
  setRead: (id: string) => void;
  removeAddAnimation: (id: string) => void;
  removeDeleteAnimation: (id: string) => void;
  theme: boolean;
  searchText: string;
}

interface IContentState {
  letterIsVisible: boolean;
}

export class Content extends React.Component<IContentProps, IContentState> {
  public constructor(props: IContentProps) {
    super(props);

    this.state = {
      letterIsVisible: false,
    };

    this.showLetter = this.showLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
    this.getContentClass = this.getContentClass.bind(this);
    this.getLineClass = this.getLineClass.bind(this);
  }

  private showLetter() {
    this.setState({
      letterIsVisible: true
    });
  }

  private closeLetter() {
    this.setState({
      letterIsVisible: false
    });
  }

  private getContentClass() {
    return !this.props.theme ? styles.content : styles.contentDark;
  }

  private getLineClass() {
    return !this.props.theme ? pageStyles.line : pageStyles.lineDark;
  }

  public render() {
    return (
      <main id="main-content" className={this.getContentClass()}>
        <label htmlFor="menu-checkbox">
          <input
            id="menu-checkbox"
            className={styles.myCheckbox}
            type="checkbox"
            checked={this.props.isSelectAll}
            onChange={this.props.selectAll}
          />
        </label>
        <MessageMenu deleteMessages={this.props.deleteMails} />
        <div className={this.getLineClass()} />

        <Letters
          letters={this.props.letters}
          checkboxChange={this.props.checkboxChange}
          checked={this.props.checked}
          setText={this.props.setText}
          setRead={this.props.setRead}
          removeAddAnimation={this.props.removeAddAnimation}
          removeDeleteAnimation={this.props.removeDeleteAnimation}
          display={!this.state.letterIsVisible}
          showLetter={this.showLetter}
          theme={this.props.theme}
          searchText={this.props.searchText}
        />
        <Letter
          text={this.props.text}
          display={this.state.letterIsVisible}
          closeLetter={this.closeLetter}
          theme={this.props.theme}
        />
        <Footer theme={this.props.theme} />
      </main>
    );
  }
}
