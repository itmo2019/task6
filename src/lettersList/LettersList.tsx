import React, { Component } from 'react';
import cn from 'classnames';
import { Article } from '../article/Article';
import { Letter } from '../letter/Letter';
import { LetterHeader } from '../letterHeader/LetterHeader';
import { ILetter } from '../letter/ILetter';
import styles from '../letter/Letter.module.css';

interface IProps {
  isDark: boolean;
  openId: number;
  letters: ILetter[];
  openLetters: () => void;
  markNotNew: (a: number) => void;
  letterChose: (a: number) => void;
  openArticle: (a: number) => void;
  letterAdded: (a: number) => void;
  lettersDeleted: () => void;
  allLettersChose: (a: boolean) => void;
  changeColor: () => void;
}

export class LettersList extends Component<IProps> {
  public render() {
    let code;
    if (this.props.openId !== -1) {
      code = (<Article
          id={this.props.openId.toString()}
          key={this.props.openId.toString()}
          letterText={this.props.letters[this.props.letters.length - 1 - this.props.openId].letterText}
          openLetters={this.props.openLetters}
        />
      );
    } else {
      code = (<section id={styles.lettersList_afterFirst}>{
        this.props.letters.
        filter(letter => {return letter.isVisible}).
        slice(0, 100).map(letter => {
          return (
            <Letter
              isDark={this.props.isDark}
              markNotNew={this.props.markNotNew}
              letterChose={this.props.letterChose}
              openArticle={this.props.openArticle}
              id={letter.id}
              key={letter.id}
              letterText={letter.letterText}
              color={letter.color}
              sender={letter.sender}
              date={letter.date}
              classS={letter.classS}
              chose={letter.chose}
            />
          );
        })
        }</section>
      );
    }

    const darkClass = cn(styles.windowLetters, {
      [styles.darkSide]: this.props.isDark
    });

    return (
      <section className={darkClass}>
        <LetterHeader
          letterAdded={this.props.letterAdded}
          lettersDeleted={this.props.lettersDeleted}
          allLettersChose={this.props.allLettersChose}
          changeColor={this.props.changeColor}
        />
        <ul className={styles.lettersList}>{code}</ul>
      </section>
    );
  }
}
