import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Menu } from './menu/Menu';
import { LettersList } from './window-letters/LettersList';
import { genLetterText, getRandomFromRange } from '../functions/Functions';
import './Main.css';


export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { isDark: false, letters: [], openId: -1, searchedLetters: [], template: ""};
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

  openArticle(index) {
    this.setState(state => {
      return { openId: index };
    });
  }

  openLetters() {
    this.setState(state => {
      return { openId: -1 };
    });
  }

  allLettersChose(status) {
    const newLetters = this.state.letters.map(letter => {
      if (letter.isVisible) {
        return { ...letter, chose: status };
      } else {
        return letter;
      }
    });
    this.setState(state => {
      return { letters: newLetters };
    });
  }

  lettersDeleted() {
    const newLetters = this.state.letters.map(letter => {
      if (letter.chose) {
        letter.classS = 'delete';
      }
      return letter;
    });

    const newLettersS = this.state.searchedLetters.map(letter => {
      if (letter.chose) {
        letter.classS = 'delete';
      }
      return letter;
    });

    this.setState(state => {
      return {
        letters: newLetters,
        searchedLetters: newLettersS
      };
    });
    window.setTimeout(function(letters) {
        const lettersS = letters.filter(letter => {
          return letter.classS !== 'delete';
        });
        this.setState(state => {
          return { letters: lettersS };
        });
      }.bind(this),
      1300,
      newLetters
    );
  }

  letterChose(index) {
    const newLetters = this.state.letters.map(letter => {
      if (letter.id !== index) return letter;
      return { ...letter, chose: !letter.chose };
    });
    this.setState(state => {
      return { letters: newLetters };
    });
  }

  setLetters() {
    let newLetters = [];
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
    this.setState(state => {
      return { letters: newLetters };
    });
  }

  letterAdded(index) {
    const newLetter = genLetterText();
    this.setState(state => {
      let newLetterS = {
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
        openId: -1,
        searchedLetters: state.letters
      };
    });
    let delay = 0;
    let itsTime = false;
    let newMax = this.curMax;
    // console.log(newMax);
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
  }

  markNotNew(id) {
    const lettersS = this.state.letters;
    for (let i = 0; i < lettersS.length; i++) {
      if (lettersS[i].id === id) {
        lettersS[i].classS = "notNew";
      }
    }
    this.setState(state => {
      return { letters: lettersS };
    });
  }

  searchLetters(template) {
    const lettersS = this.state.letters;
    for (let i = 0; i < lettersS.length; i++) {
      if (lettersS[i].letterText.includes(template) || lettersS[i].sender.includes(template)) {
        lettersS[i].isVisible = true;
      } else {
        lettersS[i].isVisible = false;
      }
    }
    this.setState(state => {
      return { template: template, letters: lettersS };
    });
  }

  changeColor() {
    this.setState(state => {
      return { isDark: !state.isDark };
    });
  }

  render() {
    let darkClass;
    if (this.state.isDark) {
      darkClass = 'black-side';
    }
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
