import React, { Component } from 'react';

import './App.module.css';
import { Header } from './header';
import { MainMenu } from './mainMenu/mainMenu';
import { Content } from './content';
import { LetterData, randomLetterData } from '../util/random/random';

interface IAppState {
  letters: LetterData[];
  masterChecked: boolean;
  searchValue: string;
}

export class App extends Component<{}, IAppState> {
  allLetters: LetterData[];
  constructor(props: {}) {
    super(props);
    this.allLetters = []
    this.state = {
      letters: [],
      masterChecked: false,
      searchValue: ''
    };
    this.toggleMasterSelection = this.toggleMasterSelection.bind(this);
    this.markDeleteSelectedLetters = this.markDeleteSelectedLetters.bind(this);
    this.removeLetter = this.removeLetter.bind(this);
    this.selectLetter = this.selectLetter.bind(this);
    this.letterShown = this.letterShown.bind(this);
    this.createNewMail = this.createNewMail.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.clearSearchValue = this.clearSearchValue.bind(this);
  }

  toggleMasterSelection(): void {
    this.setState(state => {
      const newMaster = !state.masterChecked;
      let lettersCopy = [...state.letters].map(letter => {
        letter.checked = newMaster;
        return letter;
      })
      return {
        letters: lettersCopy,
        masterChecked: newMaster
      };
    });
  }

  markDeleteSelectedLetters(): void {
    this.setState(state => {
      let lettersCopy = [...state.letters].map(letter => {
        if (letter.checked) {
          letter.checked = false;
          letter.visible = false;
        }
        return letter;
      })
      return {
        letters: lettersCopy,
        masterChecked: false
      };
    });
  }

  removeLetter(id: number): void {
    this.setState(state => {
      this.allLetters = this.allLetters.filter(it => it.visible)
      return {
        letters: this.filterLetters(state.searchValue, false)
      };
    });
  }

  selectLetter(id: number): void {
    this.setState(state => {
      const itemCopy = this.allLetters.find((it) => it.id === id)
      if(itemCopy) {
        itemCopy.checked = !itemCopy.checked;
      }
      return {
        letters: this.filterLetters(state.searchValue, false)
      };
    });
  }

  letterShown(id: number): void {
    this.setState(state => {
      const itemCopy = this.allLetters.find((it) => it.id === id)
      if(itemCopy) {
        itemCopy.shown = true;
      }
      const lettersCopy = this.filterLetters(state.searchValue, false)
      return {
        letters: lettersCopy
      };
    });
  }

  createNewMail(): void {
    let newMail = randomLetterData();
    this.setState(state => {
      this.allLetters.push(newMail)
      let lettersCopy = this.filterLetters(state.searchValue, false)
      return {
        letters: lettersCopy
      };
    });
  }

  filterLetters(searchValue: string, cancelAnim: boolean): LetterData[] {
    if(cancelAnim) {
      this.allLetters.forEach(it => {
        it.checked = false
        it.shown = true
      })
    }
    return this.allLetters.filter(letter => letter.text.includes(searchValue) || letter.sender.includes(searchValue))
  }

  onSearchChange(s: string): void {
    this.setState(state => {
      return {
        searchValue: s,
        letters: this.filterLetters(s, true)
      }
    })
  }

  clearSearchValue(): void {
    this.setState(state => {
      return {
        searchValue: '',
        letters: this.filterLetters('', true)
      } 
    })
  }

  componentDidMount() {
    //TODO: start timer
  }

  render() {
    return (
      <div className="app">
        <Header
          onSearchChange={this.onSearchChange}
          searchValue={this.state.searchValue}
          clearSearchValue={this.clearSearchValue}
        />
        <MainMenu createNewMail={this.createNewMail} />
        <Content
          letters={this.state.letters}
          masterChecked={this.state.masterChecked}
          toggleMasterSelection={this.toggleMasterSelection}
          markDeleteSelectedLetters={this.markDeleteSelectedLetters}
          selectLetter={this.selectLetter}
          letterShown={this.letterShown}
          removeLetter={this.removeLetter}
        />
      </div>
    );
  }
}
