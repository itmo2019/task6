import * as React from 'react';

import styles from './app.module.css';
import { Top } from './components/top/top';
import { Main } from './components/main/main';
import * as utils from './letterUtils';
import { ILetter } from './letterUtils';

const letterTimeDist = 300000;
const minNewLetterTime = 10;
const maxNewLetterTime = 600000;
const maxLettersNumberOnPage = 30;

interface IState {
  nightMode: boolean;
  query: string;
  letters: ILetter[];

}

export class App extends React.Component<{}, IState> {
  private shortLastLetterTimeDist: boolean = false;

  public constructor(props: {}) {
    super(props);
    this.state = {
      nightMode: false,
      query: '',
      letters: []
    };
    this.switchMode = this.switchMode.bind(this);
    this.newQuery = this.newQuery.bind(this);
    this.newMail = this.newMail.bind(this);
    this.remove = this.remove.bind(this);
    this.getNextTimeDist = this.getNextTimeDist.bind(this);
    setTimeout(() => {
      this.letterArrival();
    }, utils.randRange(minNewLetterTime, maxNewLetterTime));
  }

  private switchMode() {
    this.setState(state => {
        return { nightMode: !state.nightMode };
      }
    );
  }

  private static filterLetter(letter: ILetter, q: string): boolean {
    return letter.sender.includes(q) || letter.text.includes(q);
  }

  private static getLetters(letters: ILetter[], q: string) {
    const letters_ = letters.filter(l => this.filterLetter(l, q));
    letters_.forEach(l => l.display = true);
    return letters_;
  }

  private getNextTimeDist() {
    let nextTimeDist;
    if (this.shortLastLetterTimeDist) {
      nextTimeDist = utils.randRange(letterTimeDist, maxNewLetterTime);
      this.shortLastLetterTimeDist = false;
    } else {
      nextTimeDist = utils.randRange(minNewLetterTime, maxNewLetterTime);
      if (nextTimeDist < letterTimeDist) {
        this.shortLastLetterTimeDist = true;
      }
    }
    return nextTimeDist;
  }

  check = (id: string) => {
    this.setState(state => {
      const letterIndex = state.letters.findIndex(curLetter => curLetter.id.toString() === id);
      const newLetters = state.letters;
      newLetters[letterIndex].isChecked = !newLetters[letterIndex].isChecked;
      return { letters: newLetters };
    });
  };

  checkAll = (isChecked: boolean) => {
    this.setState(state => {
      const letters = state.letters;
      for (let i = 0; i < Math.min(state.letters.length, maxLettersNumberOnPage); i++) {
        letters[i] = state.letters[i];
        letters[i].isChecked = isChecked;
      }
      return { letters: letters };
    });
  };

  newQuery(q: string) {
    this.setState({
      query: q
    });
  }

  private newMail() {
    const newLetter = utils.genLetter();
    this.setState(prevState => {
      const newLetters = prevState.letters;
      if (newLetters.length >= maxLettersNumberOnPage) {
        for (let i = maxLettersNumberOnPage - 1; i < newLetters.length; i++) {
          newLetters[i].display = false;
        }
      }
      newLetters.unshift(newLetter);
      setTimeout(() => {
        newLetter.arrive = true;
        this.setState({
          letters: newLetters
        });
      }, 10);
      return { letters: newLetters };
    });
  }

  private static showHiddenLetters(lettersList: ILetter[]) {
    let displayedNumber = 0;
    let i = 0;
    const showingLettersList = lettersList;
    while (displayedNumber < maxLettersNumberOnPage && i < showingLettersList.length) {
      if (!showingLettersList[i].remove) {
        displayedNumber++;
        showingLettersList[i].display = true;
      }
      i++;
    }
    return showingLettersList;
  };

  remove() {
    const lettersList = this.state.letters;
    for (let i = 0; i < lettersList.length; i++) {
      if (lettersList[i].isChecked) {
        lettersList[i].remove = true;
      }
    }
    this.setState({ letters: App.showHiddenLetters(lettersList) });
    setTimeout(() => {
      this.setState({
        letters: lettersList.filter(letter => !letter.isChecked)
      });
    }, 1000);
  }

  letterArrival() {
    this.newMail();
    const nextTimeDist = this.getNextTimeDist();
    setTimeout(() => {
      this.newMail();
    }, nextTimeDist);
  }

  render() {
    const nightMode = this.state.nightMode;
    const color = nightMode ? styles.night : '';
    const letters = this.state.query === '' ? this.state.letters : App.getLetters(this.state.letters, this.state.query);
    return (
      <div className={`${styles.app} ${color}`}>
        <Top
          nightMode={nightMode}
          newQuery={this.newQuery}
          switchMode={this.switchMode}
        />
        <Main
          nightMode={nightMode}
          newMail={this.newMail}
          letters={letters}
          remove={this.remove}
          check={this.check}
          checkAll={this.checkAll}
        />
      </div>
    );
  }
}
