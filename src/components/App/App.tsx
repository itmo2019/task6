import * as React from 'react';
import { Component } from 'react';
import { data, months } from './data';
import { Menu } from './Menu/Menu';
import { Main } from './Main/Main'
import { Color } from 'csstype';
import { getThemed, Theme, ThemeContext } from './theme';

import style from './App.module.css';

export interface ILetter {
  key: number;
  story?: boolean;
  icon?: string;
  author: string;
  title: string;
  date: string;
  unread?: boolean;
  selected?: boolean;
  avatar?: string;
  new?: boolean;
  deleted?: boolean;
  color?: Color;
}

interface AppState {
  letters: ILetter[]
  theme: Theme;
}

export class App extends Component<{}, AppState> {
    readonly state: AppState = {
      letters: [
        {
          key: 0,
          story: true,
          icon: 'Я',
          unread: true,
          author: 'Яндекс.Паспорт',
          title: 'Доступ восстановлен',
          date: '9 мар'
        },
        {
          key: 1,
          avatar: '../images/avatar.JPG',
          author: 'Мама',
          title: 'Рецепт борща',
          date: '9 мар'
        },
        {
          key: 2,
          icon: 'И',
          unread: true,
          author: 'Иванов Иван',
          title:
            'Дипломная работа на тему "Социально педагогическая работа по развитию социальной активности старшеклассников в условиях общеобразовательного учреждения"',
          date: '7 мар'
        },
        {
          key: 3,
          author: 'Абракадабра',
          title: 'Заклинание',
          date: '5 мар'
        }
      ],
      theme: (theme => theme ? theme : 'dark')(localStorage.getItem('theme') as Theme)
    };

  componentDidMount() {
    const this2 = this;
    (function sendEmails([time1, time2]: [number, number]) {
      const minute = (x: number) => x * 60 * 1000;
      const ms = (x: number) => x;

      let delay = Math.random() * minute(10) + ms(10);
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
      console.log("delete");
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
    const sample = data[Math.floor(Math.random() * data.length)];
    this.setState(({ letters: [...oldLetters], theme }) => {
      const newLetter = {
        key: Math.random() * 2100000000,
        author: sample.name,
        title: sample.phrase,
        unread: Math.random() < 0.5,
        icon: sample.name[0],
        color: `#${(((1 << 24) * Math.random()) | 0).toString(16)}`,
        date: `${Math.floor(28 * Math.random() + 1)} ${months[Math.floor(Math.random() * 12)]}`,
        new: true
      };
      setTimeout(() => newLetter.new = false, 500);
      return {
        letters: [newLetter, ...oldLetters], theme
      };
    });
  };

  newBatchMail = () => {
    const newLetters: ILetter[] = [];
    for (let i = 0; i < 1000; i++) {
      const sample = data[i % data.length];
      const newLetter = {
        key: Math.random() * 2100000000,
        author: sample.name,
        title: sample.phrase,
        unread: Math.random() < 0.5,
        icon: sample.name[0],
        color: `#${(((1 << 24) * Math.random()) | 0).toString(16)}`,
        date: `${Math.floor(28 * Math.random() + 1)} ${months[Math.floor(Math.random() * 12)]}`,
        new: true
      };
      newLetters.push(newLetter)
    }
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
