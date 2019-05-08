import * as React from 'react';
import { Component } from 'react';

import { Menu } from '../Menu/Menu';
import { Main } from '../Main/Main';

import { generate1000Letters, generateLetter, ILetter, initialStateLetters } from './App';
import { getThemed, Theme, ThemeContext } from '../theme';

// @ts-ignore
import style from './App.module.css';


interface AppState {
  letters: ILetter[]
  theme: Theme;
}


export class App extends Component<{}, AppState> {
    readonly state: AppState = {
      letters: initialStateLetters,
      theme: (theme => theme ? theme : 'dark')(localStorage.getItem('theme') as Theme)
    };

  componentDidMount() {
    const this2 = this;
    (function sendEmails([time1, time2]: [number, number]) {
      const minute = (x: number) => x * 60 * 1000;
      const ms = (x: number) => x;

      let delay = Math.random() * minute(10) + ms(10);
      console.log("New email will be delivered in " + delay / 60 / 1000 + " minutes");
      const time3 = new Date().getTime() + delay;
      if (time3 - time1 < minute(5)) {
        delay = minute(5);
      }
      setTimeout(() => {
        this2.newMail();
        sendEmails([time2, new Date().getTime()]);
      }, delay);
    })([0, 0]);
  }

  allSelected = () => {
    return this.state.letters.every(x => x.selected ? x.selected : false);
  };

  toggleAll = () => {
    const cur = this.allSelected();
    this.setState(({ letters, theme }) => {
      const allSelected = letters.map(({ selected, ...fields }) => {
        return {
          selected: !cur,
          ...fields
        };
      });
      return { letters: allSelected, theme };
    });
  };

  deleteSelected = () => {
    const deletedKeys = this.state.letters.filter(x => !!x.selected).map(x => x.key);
    this.setState(({ letters, theme }) => {
      const after = letters.map(({ selected, ...rest }) => {
        if (selected) {
          return {
            deleted: true,
            ...rest
          };
        }
        return {
          ...rest
        };
      });
      return { letters: after, theme };
    });
    setTimeout(() => {
      this.setState(({ letters, theme }) => {
        const newLetters = letters.filter(({ key }) => !deletedKeys.includes(key));
        return { letters: newLetters, theme };
      });
    }, 500);
  };

  newMail = () => {
    this.setState(({ letters: [...oldLetters], theme }) => {
      const newLetter = generateLetter();
      setTimeout(() => newLetter.new = false, 500);
      return {
        letters: [newLetter, ...oldLetters], theme
      };
    });
  };

  newBatchMail = () => {
    const newLetters = generate1000Letters();
    setTimeout(() => {
      newLetters.forEach(x => x.new = false);
    }, 500);
    this.setState(({ letters: [...oldLetters], theme }) => ({
        letters: [...newLetters, ...oldLetters], theme
    }))
  };

  toggleLetter = (id: number) => {
    this.setState(({ letters, theme }) => {
      console.log("toggle letter");
      return {
        letters: letters.map(({ key, selected, ...rest }) => {
          if (key === id) {
            return {
              key,
              selected: !selected,
              ...rest
            };
          }
          return {
            key,
            selected,
            ...rest
          };
        }),
        theme
      };
    });
  };

  toggleTheme = () => {
    this.setState(({ theme, ...rest }) => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return {
        ...rest,
        theme: newTheme
      }
    })
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className={getThemed(style.app, style, this.state.theme)}>
          <Menu newMail={this.newMail} newBatchMail={this.newBatchMail} toggleTheme={this.toggleTheme} />
          <Main
            letters={this.state.letters}
            deleteSelected={this.deleteSelected}
            toggleLetter={this.toggleLetter}
            toggleAll={this.toggleAll}
            allSelected={this.allSelected()}
          />
        </div>
      </ThemeContext.Provider>
    );
  }
}
