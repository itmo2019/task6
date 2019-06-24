import React, { Component, Ref } from 'react';
import classNames from 'classnames';

import { Actions } from '../actions/actions';
import { CanDo } from '../can-do/can-do';
import { Footer } from '../footer/footer';
import { Letter } from '../letter/letter';
import { GenerateLetter } from '../genLetter';
import { ThemeContext, Theme } from '../theme-context';

import style from './block-inner.module.css';

interface IBlockInnerState {
  numOfLetters: number;
  letters: ILetter[];
  firstChecked: boolean;
  openedId: number;
  wholeNumOfLetters: number;
  displayed: Set<number>;
  notDisplayed: Set<number>;
}

interface ILetter {
  id: number;
  sender: string;
  text: string;
  message: string;
  date: string;
  formatedDate: string;
  checked: boolean;
  ref: React.RefObject<Letter>;
}

export class BlockInner extends Component<{}, IBlockInnerState> {
  private readonly maxNumOfLetters = 30;

  constructor(props: {}) {
    super(props);
    this.state = {
      numOfLetters: 0,
      letters: [],
      firstChecked: true,
      openedId: -1,
      wholeNumOfLetters: 0,
      displayed: new Set(),
      notDisplayed: new Set()
    };
    this.addLetter = this.addLetter.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.openLetter = this.openLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
    this.changeChecking = this.changeChecking.bind(this);

    let rand = Math.floor(Math.random() * (60000 - 10)) + 10;
    setTimeout(this.addLetter, rand);
    setInterval(() => {
      rand = Math.floor(Math.random() * (60000 - 10)) + 10;
      setTimeout(this.addLetter, rand);
    }, 30000);
  }

  openLetter(id: number) {
    this.setState(() => ({
      openedId: id
    }));
  }

  closeLetter(id: number) {
    const updLetters = this.state.letters.slice();
    const letter = updLetters.find(msg => msg.id === id);
    if (letter) {
      letter.checked = false;
    }
    this.setState(() => ({
      openedId: -1,
      letters: updLetters
    }));
  }

  addLetter() {
    const generator = new GenerateLetter();
    const senderAndMail = generator.genSenderAndMail();
    const dateAndFormatedDate = generator.genDate();
    const letter: ILetter = {
      id: this.state.wholeNumOfLetters,
      sender: senderAndMail[0],
      text: senderAndMail[1],
      message: senderAndMail[1],
      date: dateAndFormatedDate[0],
      formatedDate: dateAndFormatedDate[1],
      checked: false,
      ref: React.createRef()
    };
    const curDisplayed = new Set(this.state.displayed);
    const curNotDisplayed = new Set(this.state.notDisplayed);
    if (this.state.numOfLetters >= this.maxNumOfLetters) {
      let notDisplay = Infinity;
      curDisplayed.forEach(value => {
        notDisplay = Math.min(notDisplay, value);
      });
      curNotDisplayed.add(notDisplay);
      curDisplayed.delete(notDisplay);
    }
    curDisplayed.add(letter.id);
    this.setState(state => ({
      displayed: curDisplayed,
      notDisplayed: curNotDisplayed,
      wholeNumOfLetters: state.wholeNumOfLetters + 1,
      numOfLetters: state.numOfLetters + 1,
      letters: [letter, ...state.letters]
    }));
  }

  deleteLetter() {
    if (this.state.openedId === -1) {
      const curDisplayed = new Set(this.state.displayed);
      const curNotDisplayed = new Set(this.state.notDisplayed);
      const oldLetters = this.state.letters.slice();
      const newLetters: ILetter[] = [];
      for (const letter of oldLetters) {
        if (!letter.checked) {
          newLetters.push(letter);
        } else {
          curDisplayed.delete(letter.id);
          let display = -1;
          curNotDisplayed.forEach(value => {
            display = Math.max(display, value);
          });
          curNotDisplayed.delete(display);
          curDisplayed.add(display);
          if (letter.ref.current) {
            letter.ref.current.deleting();
          }
        }
      }
      setTimeout(() => {
        this.setState(() => ({
          displayed: curDisplayed,
          notDisplayed: curNotDisplayed,
          letters: newLetters
        }));
      }, 1200);
    }
  }

  changeChecking(id: number) {
    const updLetters = this.state.letters.slice();
    const letter = updLetters.find(msg => msg.id === id);
    if (letter) {
      letter.checked = !letter.checked;
    }
    this.setState(() => ({ letters: updLetters }));
  }

  selectAll() {
    this.setState(state => ({
      firstChecked: !state.firstChecked
    }));
    const updatedLetters = this.state.letters.slice();
    for (const letter of updatedLetters) {
      if (this.state.displayed.has(letter.id)) {
        letter.checked = this.state.firstChecked;
      } else {
        letter.checked = false;
      }
    }
    this.setState(() => ({ letters: updatedLetters }));
  }

  render() {
    let theme = this.context
    let fl = false;
    if (theme === Theme.night) {
      fl = true;
    }
    return (
      <div>
        <Actions addLetter={this.addLetter} />
        <div className={classNames(style['block-inner'], fl ? style['night'] : '')}>
          <CanDo selectAll={this.selectAll} deleteLetter={this.deleteLetter} />
          <div className={style['block-inner__letters']}>
            {this.state.letters.map(letter => (
              <Letter
                ref={letter.ref}
                id={letter.id}
                key={letter.id}
                text={letter.text}
                sender={letter.sender}
                message={letter.message}
                checked={letter.checked}
                date={letter.date}
                formatedDate={letter.formatedDate}
                openLetter={this.openLetter}
                closeLetter={this.closeLetter}
                openedId={this.state.openedId}
                changeChecking={this.changeChecking}
                displayed={this.state.displayed}
              />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

BlockInner.contextType = ThemeContext;
