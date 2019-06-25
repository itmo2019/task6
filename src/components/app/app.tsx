import React, { Component } from 'react';

import _ from 'lodash';
import { Header } from '../header';
import { MainMenu } from '../main-menu';
import { Content } from '../content';
import { LetterData, randomLetterData } from '../../util/random/random';

interface IAppState {
  letters: LetterData[];
  folderNames: string[];
  curFolder: string;
  masterChecked: boolean;
  searchValue: string;
  isDarkTheme: boolean;
}

const FOLDER_DELETED = 'Удаленные';
const LETTER_FOLDERS = ['Входящие', 'Отправленные', FOLDER_DELETED, 'Спам', 'Черновики'];

export interface IThemeContext {
  isDarkTheme: boolean;
  switch: () => void;
}

export const ThemeContext = React.createContext({
  isDarkTheme: false,
  switch: () => {}
});

export class App extends Component<{}, IAppState> {
  private folders: { [name: string]: LetterData[] };

  constructor(props: {}) {
    super(props);
    let folderNamesTemp = LETTER_FOLDERS;
    this.folders = {};
    LETTER_FOLDERS.forEach(name => (this.folders[name] = []));
    this.state = {
      letters: [],
      folderNames: folderNamesTemp,
      curFolder: LETTER_FOLDERS[0],
      isDarkTheme: false,
      masterChecked: false,
      searchValue: ''
    };
    this.toggleMasterSelection = this.toggleMasterSelection.bind(this);
    this.markDeleteSelectedLetters = this.markDeleteSelectedLetters.bind(this);
    this.markRestoreSelectedLetters = this.markRestoreSelectedLetters.bind(this);
    this.removeLetter = this.removeLetter.bind(this);
    this.selectLetter = this.selectLetter.bind(this);
    this.letterShown = this.letterShown.bind(this);
    this.createNewMail = this.createNewMail.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.clearSearchValue = this.clearSearchValue.bind(this);
    this.switchTheme = this.switchTheme.bind(this);
    this.changeCurFolder = this.changeCurFolder.bind(this);
    this.handleSearchChange = _.debounce(this.handleSearchChange, 300).bind(this);
  }

  private switchTheme() {
    console.log(this.state.isDarkTheme);
    this.setState(state => {
      if (!state.isDarkTheme) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      return {
        isDarkTheme: !state.isDarkTheme
      };
    });
  }

  private toggleMasterSelection(): void {
    this.setState(state => {
      const newMaster = !state.masterChecked;
      const lettersCopy = [...state.letters].map(letter => {
        letter.checked = newMaster;
        return letter;
      });
      return {
        letters: lettersCopy,
        masterChecked: newMaster
      };
    });
  }

  private markDeleteSelectedLetters(): void {
    this.setState(state => {
      const lettersCopy = [...state.letters].map(letter => {
        if (letter.checked) {
          letter.checked = false;
          letter.visible = false;
        }
        return letter;
      });
      return {
        letters: lettersCopy,
        masterChecked: false
      };
    });
  }

  private markRestoreSelectedLetters(): void {
    if(this.state.curFolder !== FOLDER_DELETED) {
      return
    }
    this.setState(state => {
      const lettersCopy = [...state.letters].map(letter => {
        if (letter.checked) {
          letter.checked = false;
          letter.visible = false;
          letter.isRestoring = true;
        }
        return letter;
      });
      return {
        letters: lettersCopy,
        masterChecked: false
      };
    });
  }

  private removeLetter(): void {
    this.setState(state => {
      let deleted = this.folders[state.curFolder].filter(it => !it.visible);
      this.folders[state.curFolder] = this.folders[state.curFolder].filter(it => it.visible);
      if (state.curFolder !== FOLDER_DELETED) {
        deleted.forEach(letter => {
          letter.checked = false;
          letter.visible = true;
        });
        this.folders[FOLDER_DELETED] = this.folders[FOLDER_DELETED].concat(deleted);
      } else if(deleted.length != 0 && deleted[0].isRestoring) {
        deleted.forEach(letter => {
          letter.checked = false;
          letter.visible = true;
        });
        deleted.forEach(letter => this.folders[letter.originalDir].push(letter))
      }
      return {
        letters: this.filterLetters(state.searchValue, false)
      };
    });
  }

  private selectLetter(id: number): void {
    this.setState(state => {
      const itemCopy = this.folders[state.curFolder].find(it => it.id === id);
      if (itemCopy) {
        itemCopy.checked = !itemCopy.checked;
      }
      return {
        letters: this.filterLetters(state.searchValue, false)
      };
    });
  }

  private letterShown(id: number): void {
    this.setState(state => {
      const itemCopy = this.folders[state.curFolder].find(it => it.id === id);
      if (itemCopy) {
        itemCopy.shown = true;
      }
      const lettersCopy = this.filterLetters(state.searchValue, false);
      return {
        letters: lettersCopy
      };
    });
  }

  private createNewMail(): void {
    if(this.state.curFolder === FOLDER_DELETED) {
      return
    }
    const newMail = randomLetterData(this.state.curFolder);
    this.setState(state => {
      this.folders[state.curFolder].push(newMail);
      const lettersCopy = this.filterLetters(state.searchValue, false);
      return {
        letters: lettersCopy
      };
    });
  }

  private filterLetters(
    searchValue: string,
    cancelAnim: boolean,
    newFolderName?: string
  ): LetterData[] {
    let curFolderName = newFolderName || this.state.curFolder;
    if (cancelAnim) {
      this.folders[curFolderName].forEach(it => {
        it.checked = false;
        it.shown = true;
      });
    }
    return this.folders[curFolderName].filter(
      letter => letter.text.includes(searchValue) || letter.sender.includes(searchValue)
    );
  }

  public componentDidMount() {
    // TODO: start timer
  }

  private handleSearchChange(s: string) {
    this.setState(state => {
      return {
        letters: this.filterLetters(s, true)
      };
    });
  }

  private onSearchChange(s: string): void {
    this.setState(state => {
      this.handleSearchChange(s);
      return {
        searchValue: s
      };
    });
  }

  private clearSearchValue(): void {
    this.setState(state => {
      return {
        searchValue: '',
        letters: this.filterLetters('', true)
      };
    });
  }

  private changeCurFolder(name: string): void {
    this.setState(state => {
      return {
        curFolder: name,
        letters: this.filterLetters(state.searchValue, true, name)
      };
    });
  }

  public render() {
    return (
      <ThemeContext.Provider
        value={{ isDarkTheme: this.state.isDarkTheme, switch: this.switchTheme }}
      >
        <div>
          <Header
            onSearchChange={this.onSearchChange}
            searchValue={this.state.searchValue}
            clearSearchValue={this.clearSearchValue}
          />
          <MainMenu
            createNewMail={this.createNewMail}
            folderNames={this.state.folderNames}
            curFolder={this.state.curFolder}
            changeCurFolder={this.changeCurFolder}
          />
          <Content
            letters={this.state.letters}
            masterChecked={this.state.masterChecked}
            toggleMasterSelection={this.toggleMasterSelection}
            markDeleteSelectedLetters={this.markDeleteSelectedLetters}
            markRestoreSelectedLetters={this.markRestoreSelectedLetters}
            selectLetter={this.selectLetter}
            letterShown={this.letterShown}
            removeLetter={this.removeLetter}
          />
        </div>
      </ThemeContext.Provider>
    );
  }
}
