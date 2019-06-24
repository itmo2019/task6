import React, { Component } from 'react';
import cn from 'classnames';
import { genLetterText, getRandomFromRange } from '../functions/Functions';
import { Header } from '../header/Header';
import { Menu } from '../menu/Menu';
import { LettersList } from '../lettersList/LettersList';
import { ILetter } from '../letter/ILetter';
import styles from './Main.module.css';

interface IState {
  isDark: boolean; // false
  letters: ILetter[];
  openId: number; // -1
  template: string;
}

export class Main extends Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      isDark: false,
      letters: [],
      openId: -1,
      template: ''
    };
    this.letterAdded = this.letterAdded.bind(this);
    this.lettersDeleted = this.lettersDeleted.bind(this);
    this.letterChose = this.letterChose.bind(this);
    this.allLettersChose = this.allLettersChose.bind(this);
    this.openArticle = this.openArticle.bind(this);
    this.openLetters = this.openLetters.bind(this);
    this.markNotNew = this.markNotNew.bind(this);
    this.searchLetters = this.searchLetters.bind(this);
    this.setLetters = this.setLetters.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.curMin = 10;
    this.curMax = 60001;
    this.fiveMin = 30000;
    this.diff = getRandomFromRange(10, 30000);
  }

  public openArticle = (index: number) => {
    this.setState({ openId: index });
  };

  public openLetters = () => {
    this.setState({ openId: -1 });
  };

  public allLettersChose = (status: boolean) => {
    const newLetters = this.state.letters.map(letter => {
      if (letter.isVisible) {
        return { ...letter, chose: status };
      } else {
        return letter;
      }
    });
    this.setState({ letters: newLetters });
  };

  public lettersDeleted = () => {
    const newLetters = this.state.letters.map(letter => {
      if (letter.chose) {
        letter.classS = 'delete';
      }
      return letter;
    });
    this.setState({ letters: newLetters });

    window.setTimeout(
      (letters: ILetter[]) => {
        const lettersS = letters.filter(letter => {
          return letter.classS !== 'delete';
        });
        this.setState({ letters: lettersS });
      }, // .bind(this)
      1300,
      newLetters
    );
  };

  public letterChose = (index: number) => {
    const newLetters = this.state.letters.map(letter => {
      if (letter.id !== index) return letter;
      return { ...letter, chose: !letter.chose };
    });
    this.setState({ letters: newLetters });
  };

  public setLetters = () => {
    const newLetters = [];
    for (let j = 0; j < 10000; j += 1000) {
      console.log(j);
      for (let i = j; i < j + 999; i++) {
        const newLetter = genLetterText();
        newLetters.push({
          id: i,
          letterText: newLetter.letterText,
          sender: newLetter.sender,
          color: newLetter.color,
          date: newLetter.date,
          deleted: newLetter.deleted,
          classS: 'notNew',
          chose: newLetter.chose,
          isVisible: true
        });
      }
    }
    this.setState({ letters: newLetters });
  };

  public letterAdded = (index: number) => {
    const newLetter = genLetterText();
    this.setState(state => {
      const newLetterS = {
        id: index,
        letterText: newLetter.letterText,
        sender: newLetter.sender,
        color: newLetter.color,
        date: newLetter.date,
        deleted: newLetter.deleted,
        classS: 'add',
        chose: newLetter.chose,
        isVisible: true
      };
      if (!newLetterS.letterText.includes(state.template)) {
        newLetterS.isVisible = false;
      }
      return {
        letters: [newLetterS, ...state.letters],
        openId: -1
      };
    });
    let delay = 0;
    let itsTime = false;
    let newMax = this.curMax;
    let currGen = 0;
    while (!itsTime) {
      let genDelay = getRandomFromRange(this.curMin, newMax);
      currGen += genDelay;
      if (currGen + this.diff >= this.fiveMin) {
        itsTime = true;
      } else {
        newMax = Math.max(0, newMax - genDelay);
      }
      delay += genDelay;
    }
    this.diff = delay;
    console.log(delay);
    window.setTimeout(this.letterAdded, delay + 1000, index + 1);
  };

  public markNotNew = (id: number) => {
    const lettersS = this.state.letters;
    for (let i = 0; i < lettersS.length; i++) {
      if (lettersS[i].id === id) {
        lettersS[i].classS = "notNew";
      }
    }
    this.setState({ letters: lettersS });
  };

  public searchLetters = (template: string) => {
    const lettersS = this.state.letters;
    for (let i = 0; i < lettersS.length; i++) {
      lettersS[i].isVisible =
        lettersS[i].letterText.includes(template) || lettersS[i].sender.includes(template);
    }
    this.setState({ template: template, letters: lettersS });
  };

  public changeColor = () => {
    this.setState(state => {
      return { isDark: !state.isDark };
    });
  };

  private readonly curMin: number;

  private readonly curMax: number;

  private readonly fiveMin: number;

  private diff: number;

  public render() {
    const darkClass = cn({
      [styles.blackSide]: this.state.isDark
    });
    return (
      <div className={darkClass}>
        <Header searchLetters={this.searchLetters} isDark={this.state.isDark} />
        <main>
          <Menu />
          <LettersList
            letterAdded={this.letterAdded}
            letterChose={this.letterChose}
            allLettersChose={this.allLettersChose}
            lettersDeleted={this.lettersDeleted}
            openArticle={this.openArticle}
            letters={this.state.letters}
            openId={this.state.openId}
            openLetters={this.openLetters}
            markNotNew={this.markNotNew}
            isDark={this.state.isDark}
            changeColor={this.changeColor}
          />
        </main>
      </div>
    );
  }
}
