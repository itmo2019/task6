import * as React from 'react';

import styles from './app.module.css';
import { Top } from './components/top/top';
import { Main } from './components/main/main';
import * as utils from './letterUtils';
import { findLetters, maxLettersNumberOnPage } from './letterUtils';
import { letterTimeDist } from './letterUtils';
import { maxNewLetterTime } from './letterUtils';
import { minNewLetterTime } from './letterUtils';
import { ILetter } from './letterUtils';

interface IState {
  nightMode: boolean;
  query: string;
  letters: ILetter[];
  qLetters: ILetter[];
}

export class App extends React.Component<{}, IState> {
  private shortLastLetterTimeDist: boolean = false;

  public constructor(props: {}) {
    super(props);
    this.state = {
      nightMode: false,
      query: '',
      letters: [],
      qLetters: []
    };
    this.switchMode = this.switchMode.bind(this);
    this.newQuery = this.newQuery.bind(this);
    this.newMail = this.newMail.bind(this);
    this.remove = this.remove.bind(this);
    this.check = this.check.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.getNextTimeDist = this.getNextTimeDist.bind(this);
    setTimeout(() => {
      this.letterArrival();
    }, utils.randRange(minNewLetterTime, maxNewLetterTime));
  }

  private newQuery(q: string) {
    this.setState({
        query: q,
        qLetters: findLetters(this.state.letters, q)
    });
  }

  private switchMode() {
    this.setState(state => {
        return { nightMode: !state.nightMode };
      }
    );
  }

  private remove() {
    const lettersList = this.state.letters;
    for (let i = 0; i < lettersList.length; i++) {
      if (lettersList[i].isChecked) {
        lettersList[i].remove = true;
      }
    }
    this.setState({ letters: utils.toDisplayed(lettersList) });
    setTimeout(() => {
      this.setState({
        letters: lettersList.filter(letter => !letter.isChecked)
      });
    }, 1000);
  }

  private letterArrival() {
    this.newMail();
    const nextTimeDist = this.getNextTimeDist();
    setTimeout(() => {
      this.newMail();
    }, nextTimeDist);
  }

  private newMail() {
    const newLetter = utils.genLetter();
    this.setState(state => {
      const newLetters = state.letters;
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
      }, 100);
      return { letters: newLetters };
    });
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

  private check(id: string) {
    this.setState(state => {
      const letterIndex = state.letters.findIndex(curLetter => curLetter.id.toString() === id);
      const newLetters = state.letters;
      newLetters[letterIndex].isChecked = !newLetters[letterIndex].isChecked;
      return { letters: newLetters };
    });
  };

  private checkAll(isChecked: boolean) {
    this.setState(state => {
      const letters = state.letters;
      for (let i = 0; i < Math.min(state.letters.length, maxLettersNumberOnPage); i++) {
        letters[i] = state.letters[i];
        letters[i].isChecked = isChecked;
      }
      return { letters: letters };
    });
  };

  public render() {
    const nightMode = this.state.nightMode;
    const appColor = nightMode ? styles.night : styles.day;
    return (
      <div className={appColor}>
        <Top
          query={this.state.query}
          nightMode={nightMode}
          newQuery={this.newQuery}
          switchMode={this.switchMode}
        />
        <Main
          nightMode={nightMode}
          newMail={this.newMail}
          query={this.state.query}
          letters={this.state.query === '' ? this.state.letters : this.state.qLetters}
          remove={this.remove}
          checkAll={this.checkAll}
          check={this.check}
        />
      </div>
    );
  }
}
