import React, { Component } from 'react';

import * as styles from './content.module.css';
import * as pageStyles from '../page/page.module.css';

import { MessageMenu } from '../messageMenu/messageMenu';
import { Letters } from '../letters/letters';
import { Letter } from '../letter/letter';
import { Footer } from '../footer/footer';
import {LetterType} from '../types/types';

interface ContentProps {
  deleteMails: () => void,
  letters: LetterType[],
  selectAll: () => void,
  isSelectAll: boolean,
  checkboxChange: (id: string) => void,
  checked: {[id: string]: boolean},
  text: string[],
  setText: (text: string[]) => void,
  setRead: (id: string) => void,
  removeAddAnimation: (id: string) => void,
}

interface ContentState {
  letterIsVisible: boolean,
}

export class Content extends Component<ContentProps, ContentState> {

  constructor(props: ContentProps) {
    super(props);

    this.state = {
      letterIsVisible: false,
    };

    this.showLetter = this.showLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
  }

  showLetter() {
    this.setState({
      letterIsVisible: true,
    });
  }

  closeLetter() {
    this.setState({
      letterIsVisible: false,
    });
  }

  render() {
    return (
      <main id="main-content" className={styles.content}>
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
        <div className={pageStyles.line} />

        <Letters
          letters={this.props.letters}
          checkboxChange={this.props.checkboxChange}
          checked={this.props.checked}
          setText={this.props.setText}
          setRead={this.props.setRead}
          removeAddAnimation={this.props.removeAddAnimation}
          display={!this.state.letterIsVisible}
          showLetter={this.showLetter}
        />
        <Letter
          text={this.props.text}
          display={this.state.letterIsVisible}
          closeLetter={this.closeLetter}
        />
        <Footer />
      </main>
    );
  }
}
