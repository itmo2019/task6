import * as React from 'react';
import styles from './main.module.css';

import { Menu } from './menu/menu';
import { Content } from './content/content';
import * as utils from './letterUtils';
import { ILetter, maxLettersNumberOnPage, minNewLetterTime, maxNewLetterTime, letterTimeDist } from './letterUtils';

interface IProps {
  nightMode: boolean;
  query: string;
}

interface IState {
  letters: ILetter[];
}

export class Main extends React.Component<IProps, IState> {
  private shortLastLetterTimeDist: boolean = false;

  public constructor(props: IProps) {
    super(props);
    this.state = {
      letters: []
    };
    this.newMail = this.newMail.bind(this);
    this.remove = this.remove.bind(this);
    this.check = this.check.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.getNextTimeDist = this.getNextTimeDist.bind(this);
    setTimeout(() => {
      this.letterArrival();
    }, utils.randRange(minNewLetterTime, maxNewLetterTime));
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
    const { nightMode } = this.props;
    const letters = this.props.query === '' ? this.state.letters : utils.findLetters(this.state.letters, this.props.query);
    return (
      <div className={styles.main}>
        <Menu nightMode={nightMode} newMail={this.newMail} />
        <Content
          nightMode={nightMode}
          letters={letters}
          remove={this.remove}
          checkAll={this.checkAll}
          check={this.check}
        />
      </div>
    );
  }
}
