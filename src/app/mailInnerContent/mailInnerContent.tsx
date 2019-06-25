import *as React from 'react';

import styles from './mailInnerContent.module.css';
import { LeftMenu } from '../leftMenu';
import { Content } from '../content';
import {
  generateDate,
  generateName,
  generateContent,
  generateRandomCount
} from './scripts/letterGeneratorUtils';
import { ILetter } from '../letterTypes/letterTypes';
import { Header } from '../header/header';

interface IState {
  create: boolean;
  isClearInput: boolean;
  counter: number;
  letters: ILetter[];
  visibleLetters: ILetter[];
  selectAll: boolean;
  markedLetters: { [id: string]: boolean };
  text: string;
}

interface IProps {
  changeTheme: () => void;
  isDark: boolean;
}

const MAX_COUNT = 30;

export class MailInnerContent extends React.Component {
  public readonly state: IState;
  public readonly props: IProps;

  static async generateLetter() {
    const author = generateName();
    const text = await generateContent();
    const subject = text[0].substr(0, 45);
    const date = generateDate();
    return { author, text, subject, date };
  }

  constructor(props: IProps) {
    super(props);
    this.props = props;
    this.state = {
      create: false,
      isClearInput: false,
      text: '',
      counter: 0,
      letters: [],
      visibleLetters: [],
      selectAll: false,
      markedLetters: {}
    };
    this.search = this.search.bind(this);
    this.deleteChosenLetter = this.deleteChosenLetter.bind(this);
    this.markLettersToDelete = this.markLettersToDelete.bind(this);
    this.switchLetterCheckbox = this.switchLetterCheckbox.bind(this);
    this.chooseAllLetters = this.chooseAllLetters.bind(this);
    this.newMail = this.newMail.bind(this);
    this.GenerateNewLetter();
    this.createNewLetter = this.createNewLetter.bind(this);
  }

  createNewLetter() {
    console.log(this.state.create);
    this.setState((state: IState) => {
      return {
        create: !state.create
      };
    });
  }

  search(text: string) {
    console.log(this.state.isClearInput);
    this.setState(() => {
      return {
        text: text
      }
    });
    const tmpLetters: ILetter[] = [];
    const tmp = this.state.letters;
    for (let i = 0; i < tmp.length; i++) {
      if (i < MAX_COUNT) {
        tmpLetters.push(tmp[i]);
      }
    }
    if (text == '') {
      this.setState(() => {
        return { visibleLetters: tmpLetters };
      });
    } else {
      let contentVisibleLetters = tmpLetters.filter(letter => letter.text[0].search(text) !== -1);
      let authorVisibleLetters = tmpLetters.filter(letter => letter.author.search(text) !== -1);
      if (authorVisibleLetters !== this.state.visibleLetters && authorVisibleLetters.length !== 0) {
        this.setState(() => {
          return { visibleLetters: authorVisibleLetters };
        });
      } else if (contentVisibleLetters !== this.state.visibleLetters) {
        this.setState(() => {
          return { visibleLetters: contentVisibleLetters };
        });
      }
    }
  }

  deleteChosenLetter(id: number) {
    let count = 0;
    const tmpVisibleLetters: ILetter[] = [];
    const tmpLetters = this.state.letters.filter(letter => letter.id !== id);
    tmpLetters.forEach(letter => {
      const tmp = letter;
      if (MAX_COUNT > count) {
        tmpVisibleLetters.push(tmp);
        count++;
      }
    });
    this.setState((state: IState) => {
      return { isClearInput: false, letters: tmpLetters, visibleLetters: tmpVisibleLetters };
    });
  }

  chooseAllLetters() {
    const tmpVisibleLetters = this.state.visibleLetters;
    const newMarkedLetters = this.state.markedLetters;
    for (let i = 0; i < tmpVisibleLetters.length; i++) {
      newMarkedLetters[tmpVisibleLetters[i].id] = !this.state.selectAll;
    }
    this.setState((state: IState) => {
      return {
        visibleLetters: tmpVisibleLetters,
        selectAll: !state.selectAll,
        markedLetters: newMarkedLetters
      };
    });
  }

  async newMail() {
    const { author, text, subject, date } = await MailInnerContent.generateLetter();
    const newMarkedLetters = this.state.markedLetters;
    const id: number = this.state.counter;
    this.setState((state: IState) => {
      return { counter: state.counter + 1 };
    });
    newMarkedLetters[id] = false;
    const tmpLetters = this.state.letters;
    // const tmpVisibleLetters: ILetter[] = [];
    const letter = {
      id,
      author,
      subject,
      text,
      date,
      changeAnimation: false,
      isSelected: false
    };
    // tmpVisibleLetters.push(letter);
    // for (let i = 0; i < tmpLetters.length; i++) {
    //   if (i < MAX_COUNT - 1) {
    //     tmpVisibleLetters.push(tmpLetters[i]);
    //   }
    // }
    this.setState((state: IState) => {
      return {
        //visibleLetters: tmpVisibleLetters,
        letters: [letter].concat(state.letters),
        markedLetters: newMarkedLetters
      };
    });
    this.search(this.state.text);
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async GenerateNewLetter() {
    const fiveMinute = 300000;
    const minTime = 10;
    const maxTime = 600000;
    let previous = 300000;
    await this.newMail();
    previous = Math.max(fiveMinute - previous, generateRandomCount(minTime, maxTime));
    await this.sleep(previous);
    this.GenerateNewLetter();
  }

  markLettersToDelete() {
    const tmpLetters = this.state.letters;
    const tmpVisibleLetters = this.state.visibleLetters;
    //console.log(tmpVisibleLetters);
    //console.log(tmpLetters);
    let f = false;
    for (let i = 0; i < tmpVisibleLetters.length; i++) {
      if (this.state.markedLetters[tmpVisibleLetters[i].id]) {
        for (let j = 0; j < tmpLetters.length; j++) {
          if (tmpLetters[j] == tmpVisibleLetters[i]){
            f = true;
            tmpVisibleLetters[i].changeAnimation = true;
            tmpLetters[j].changeAnimation = true;
          }
        }
      }
    }
    this.setState(() => {
      return {
        isClearInput: f,
        visibleLetters: tmpVisibleLetters,
        letters: tmpLetters,
        selectAll: false
      };
    });
  }

  switchLetterCheckbox(id: number) {
    const newMarkedLetters = this.state.markedLetters;
    newMarkedLetters[id] = !newMarkedLetters[id];
    this.setState(() => {
      return { markedLetters: newMarkedLetters };
    });
  }

  render() {
    return (
      <main className={styles.mailInnerContent}>
        <Header isClearInput={this.state.isClearInput} search={this.search} isDark={this.props.isDark} changeTheme={this.props.changeTheme}/>
        <LeftMenu newMail={this.newMail}/>
        <Content
          create={this.state.create}
          createNewLetter={this.createNewLetter}
          isDark={this.props.isDark}
          deleteChosenLetter={this.deleteChosenLetter}
          markLettersToDelete={this.markLettersToDelete}
          chooseAllLetters={this.chooseAllLetters}
          switchLetterCheckbox={this.switchLetterCheckbox}
          visibleLetters={this.state.visibleLetters}
          selectAll={this.state.selectAll}
          markedLetters={this.state.markedLetters}
        />
      </main>
    );
  }
}
