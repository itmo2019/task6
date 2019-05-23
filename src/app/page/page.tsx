import * as React from 'react';

import { Header } from '../header/header';
import { Nav } from './nav';
import { Content } from '../content/content';
import {
  genAuthorImage,
  genAuthorName,
  genHeadText,
  genText,
  getDate,
  getHeadDate,
  generateLetters,
  MAX_LETTERS
} from '../scripts/scripts';
import { ILetterType } from '../types/types';
import styles from './page.module.css';

interface IMyState {
  checked: { [id: string]: boolean };
  letters: ILetterType[];
  count: number;
  isSelectAll: boolean;
  text: string[];
  searchText: string;
  theme: boolean;
  searchFor: string;
  worker: any;
  filteredLetters: ILetterType[] | null;
  generated: boolean;
}

export class Page extends React.Component<{}, IMyState> {
  public constructor(props: {}) {
    super(props);
    const { letters, checked } = generateLetters();

    this.state = {
      checked,
      letters,
      count: 0,
      isSelectAll: false,
      text: [],
      searchText: '',
      theme: false,
      searchFor: '',
      worker: null,
      filteredLetters: null,
      generated: false
    };

    this.newLetter = this.newLetter.bind(this);
    this.deleteMails = this.deleteMails.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
    this.setText = this.setText.bind(this);
    this.markRead = this.markRead.bind(this);
    this.setRead = this.setRead.bind(this);
    this.removeAddAnimation = this.removeAddAnimation.bind(this);
    this.setSearchText = this.setSearchText.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.removeLetterById = this.removeLetterById.bind(this);

    this.last = 0;

    this.newMail = this.newMail.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    document.body.style.background = this.state.theme ? 'black' : '#e5eaf0';
  }

  public newLetter = () => {
    console.log('1');
    const id: string = `letter-id-${this.state.count}`;

    this.setState((state: Readonly<IMyState>) => {
      return { count: state.count + 1 };
    });

    const authorName: string = genAuthorName();
    const authorImage: string = genAuthorImage();
    const headText: string = genHeadText();
    const letterText: string[] = genText();

    const date: Date = new Date();
    const headTagDate: string = getDate(date);
    const headDate: string = getHeadDate(date);

    const newChecked: { [id: string]: boolean } = this.state.checked;
    newChecked[id] = false;
    const newLetters = this.state.letters;

    const newLetter: ILetterType = {
      id,
      letterText,
      authorName,
      authorImage,
      headText,
      isChecked: false,
      isVisible: true,
      isRead: true,
      addAnimation: true,
      deleteAnimation: false,
      headTagDate,
      headDate
    };

    // newLetter.isVisible = this.isLetterHasText(this.state.searchText, newLetter);
    // let count = 0;
    // if (newLetter.isVisible) {
    //   count += 1;
    // }
    // for (let i = 0; i < newLetters.length; i++) {
    //   if (count < MAX_LETTERS && this.isLetterHasText(this.state.searchText, newLetters[i])) {
    //     newLetters[i].isVisible = true;
    //     count++;
    //   } else {
    //     newLetters[i].isVisible = false;
    //   }
    // }

    this.setState((state: IMyState) => {
      return {
        letters: [newLetter].concat(state.letters),
        checked: newChecked
      };
    });
  };

  private readonly selectAll = () => {
    const newChecked: { [id: string]: boolean } = this.state.checked;

    if (this.state.filteredLetters !== null) {
      for (let i = 0; i < Math.min(this.state.filteredLetters.length, MAX_LETTERS); i++) {
        newChecked[this.state.filteredLetters[i].id] = !this.state.isSelectAll;
      }
    } else {
      for (let i = 0; i < Math.min(this.state.letters.length, MAX_LETTERS); i++) {
        newChecked[this.state.letters[i].id] = !this.state.isSelectAll;
      }
    }
    this.setState((state: IMyState) => {
      return {
        isSelectAll: !state.isSelectAll,
        checked: newChecked
      };
    });
  };

  private readonly checkboxChange = (id: string) => {
    const newChecked: { [id: string]: boolean } = this.state.checked;
    newChecked[id] = !newChecked[id];
    this.setState({
      checked: newChecked
    });
  };

  private readonly deleteMails = () => {
    const newLetters: ILetterType[] = this.state.letters.map(letter => {
      const newLetter: ILetterType = letter;
      if (this.state.checked[newLetter.id]) {
        newLetter.deleteAnimation = true;
      }
      return newLetter;
    });

    this.setState({
      letters: newLetters,
      isSelectAll: false
    });

    // setTimeout(this.makeDelete, 1500);
  };

  private readonly setText = (text: string[]) => {
    this.setState({
      text
    });
  };

  private readonly markRead = (id: string, val: ILetterType) => {
    const val1: ILetterType = val;
    if (val1.id === id) {
      val1.isRead = false;
    }
    return val1;
  };

  private readonly setRead = (id: string) => {
    const newLetters: ILetterType[] = this.state.letters;
    const letters1: ILetterType[] = newLetters.map(value => this.markRead(id, value));
    this.setState({
      letters: letters1
    });
  };

  private readonly removeAddAnimation = (id: string) => {
    const letters1: ILetterType[] = this.state.letters;
    const newLetters: ILetterType[] = letters1.map(value => {
      const tmp: ILetterType = value;
      if (tmp.id === id) {
        tmp.addAnimation = false;
      }
      return tmp;
    });
    this.setState({
      letters: newLetters
    });
  };

  private isLetterHasText = (text: string, letter: ILetterType) => {
    if (text.length === 0) {
      return true;
    }
    if (
      letter.headText.toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) !== -1 ||
      letter.authorName.toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) !== -1
    ) {
      return true;
    }
    let f = false;
    for (let i = 0; i < letter.letterText.length && !f; i++) {
      if (letter.letterText[i].toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) !== -1) {
        f = true;
      }
    }
    return f;
  };

  private readonly setSearchText = (text: string) => {
    this.setState({
      searchText: text
    });
  };

  private newMail() {
    this.newLetter();
    const fiveMinute = 300000;
    const maxTime = 600000;
    const minTime = 10;
    const time: number = Math.max(
      fiveMinute - this.last,
      Math.floor(Math.random() * (maxTime - minTime) + minTime)
    );
    this.last = time;
    setTimeout(this.newMail, time);
  }

  private removeLetterById(letters: ILetterType[], id: string) {
    let newLetters: ILetterType[] = letters;
    newLetters = newLetters.filter((letter: ILetterType) => letter.id !== id);
    return newLetters;
  }

  private deleteLetter(id: string) {
    this.setState((state: IMyState) => {
      const newLetters: ILetterType[] = this.removeLetterById(state.letters, id);
      let newFilteredLetters: ILetterType[] | null = null;
      if (state.filteredLetters !== null) {
        newFilteredLetters = this.removeLetterById(state.filteredLetters, id);
      }
      return {
        letters: newLetters,
        filteredLetters: newFilteredLetters
      };
    });
  }

  private changeTheme() {
    this.setState((state: IMyState) => {
      document.body.style.background = state.theme ? '#e5eaf0' : 'black';
      return { theme: !state.theme };
    });
  }

  private last: number;

  public render() {
    const searchText: string = this.state.searchText.toLocaleUpperCase();

    if (searchText !== this.state.searchFor) {
      if (this.state.searchText !== '') {
        this.setState((state: IMyState) => {
          if (state.worker) {
            clearTimeout(state.worker);
          }

          return {
            searchFor: searchText,
            worker: setTimeout(() => {
              const lambdaWorker = (filtered: ILetterType[], from: number, size: number) => {
                const to = Math.min(from + 1000, size);
                const newLetters = state.letters
                  .slice(from, to)
                  .filter((letter: ILetterType) => this.isLetterHasText(searchText, letter));
                if (to === size) {
                  console.log('searchEnd');
                  this.setState({
                    filteredLetters: filtered.concat(newLetters),
                    worker: null,
                    searchFor: searchText
                  });
                } else {
                  const worker = setTimeout(() => lambdaWorker(newLetters, to, size));
                  this.setState({
                    filteredLetters: filtered.concat(newLetters),
                    worker,
                    searchFor: searchText
                  });
                }
              };
              console.log('searchStart');
              lambdaWorker([], 0, this.state.letters.length);
            }, 500)
          };
        });
      } else {
        this.setState((state: IMyState) => {
          if (state.worker) {
            clearTimeout(state.worker);
          }
          return {
            filteredLetters: null,
            worker: null,
            searchFor: searchText
          };
        });
      }
    }
    const letters = this.state.filteredLetters || this.state.letters;
    return (
      <div className={styles.page}>
        <Header
          setSearchText={this.setSearchText}
          changeTheme={this.changeTheme}
          theme={this.state.theme}
        />
        <Nav newLetter={this.newLetter} theme={this.state.theme} />
        <Content
          deleteMails={this.deleteMails}
          letters={letters}
          selectAll={this.selectAll}
          isSelectAll={this.state.isSelectAll}
          checkboxChange={this.checkboxChange}
          checked={this.state.checked}
          text={this.state.text}
          setText={this.setText}
          setRead={this.setRead}
          removeAddAnimation={this.removeAddAnimation}
          removeDeleteAnimation={this.deleteLetter}
          theme={this.state.theme}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}
