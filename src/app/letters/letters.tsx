import React, { Component } from 'react';

import * as styles from './letters.module.css';

import { LetterHead } from '../letterHead/letterHead';
import { LetterType } from '../types/types';

interface LettersProps {
  letters: LetterType[],
  checkboxChange: (id: string) => void,
  checked: {[id: string]: boolean},
  setText: (text: string[]) => void,
  setRead: (id: string) => void,
  removeAddAnimation: (id: string) => void,
  makeDelete: (id: string) => void,
  display: boolean
  showLetter: () => void
}

export class Letters extends Component {

  public readonly props: LettersProps;
  constructor(props: LettersProps) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <ul className={styles.className} style={{ display: this.props.display ? 'inline-block' : 'none' }}>
        {this.props.letters.map(a => {
          if (a.isVisible) {
            return (
              <LetterHead
                id={a.id}
                key={a.id}
                authorName={a.authorName}
                authorImage={a.authorImage}
                text={a.letterText}
                headText={a.headText}
                isVisible={a.isVisible}
                isChecked={this.props.checked[a.id]}
                checkboxChange={this.props.checkboxChange}
                setText={this.props.setText}
                addAnimation={a.addAnimation}
                removeAddAnimation={this.props.removeAddAnimation}
                deleteAnimation={a.deleteAnimation}
                makeDelete={this.props.makeDelete}
                isRead={a.isRead}
                setRead={this.props.setRead}
                showLetter={this.props.showLetter}
              />
            );
          }
        })}
      </ul>
    );
  }
}
