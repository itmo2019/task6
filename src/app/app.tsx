import React, { Component } from 'react';

import './app.css';
import Menu from '../menu/menu';
import Writebox from '../writebox/writebox';
import Search from '../search/search';
import Letters from '../letters/letters';
import Logo from '../logo/logo';
import ThemeSwitch from '../theme-switch/theme-switch';
import { ILetter } from '../letters/__letter/letters__letter';
import { contents, getRandomInt, rndAuthor, rndTheme } from '../letters/content';

interface IState {
  letters: ILetter[];
  theme: string;
  filter: string;
  filterProcessingDisplay: boolean;
}

export class App extends Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      theme: 'light',
      filter: '',
      filterProcessingDisplay: false,
      letters: [
        {
          author: 'Яндекс.Паспорт',
          theme: 'Доступ к аккаунту восстановлен',
          date: '6 авг',
          authorImage: Letters.createYandexAuthorImage(),
          read: false,
          checked: false,
          display: true
        },
        {
          author: 'Команда Яндекс.Почты',
          theme: 'Как читать почту с мобильного',
          date: '6 июл',
          authorImage: Letters.createYandexAuthorImage(),
          read: false,
          checked: false,
          display: true
        },
        {
          author: 'Команда Яндекс.Почты',
          theme: 'Как читать почту с мобильного',
          date: '6 июл',
          authorImage: Letters.createYandexAuthorImage(),
          read: true,
          checked: false,
          display: true
        },
        {
          author: 'Яндекс',
          theme: 'Соберите всю почту в этот ящик',
          date: '6 июл',
          authorImage: Letters.createYandexAuthorImage(),
          read: true,
          checked: false,
          display: true
        }
      ]
    };
    this.changeTheme = this.changeTheme.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setFilterProcessingDisplay = this.setFilterProcessingDisplay.bind(this);
    this.newLetter = this.newLetter.bind(this);
    this.deleteOnclick = this.deleteOnclick.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.processFilter = this.processFilter.bind(this);
  }

  public changeTheme(checkbox: React.ChangeEvent<HTMLInputElement>): void {
    console.log(this.state.theme);
    console.log(checkbox.currentTarget);
    console.log(checkbox.currentTarget.checked);
    const b = checkbox.target.checked;
    this.setState(() => {
      if (b) {
        console.log('kek');
        return {
          theme: 'dark'
        };
      }
      return {
        theme: 'light'
      };
    });
    console.log(this.state.theme);
  }

  private handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    this.processFilter(event.target.value);
    this.setState({});
  }

  private setFilter(s: string) {
    this.setState({ filter: s });
  }

  public setFilterProcessingDisplay(display: boolean) {
    console.log('app setFilterProcessingDisplay');
    //this.setState({ filterProcessingDisplay: display });
  }

  private removeSearchTextInput(event: React.MouseEvent<HTMLElement, MouseEvent>) {}

  private processFilter(s: string) {
    if (s === '') {
      for (let i = 0; i < this.state.letters.length; i++) {
        this.state.letters[i].display = true;
      }
      return;
    }
    for (let i = 0; i < this.state.letters.length; i++) {
      this.state.letters[i].display = this.state.letters[i].theme
        .toLowerCase()
        .includes(s.toLowerCase());
    }
  }

  public componentDidMount() {
    let sum = 0;

    for (let i = 1; i < 20; i++) {
      sum += 10 * getRandomInt(1, 600);
      setTimeout(this.newLetter, sum);
    }
  }

  private handleCheckbox(checkbox: React.ChangeEvent<HTMLInputElement>, number: number) {
    this.state.letters[number].checked = checkbox.target.checked;
    this.setState(state => {
      return state;
    });
  }

  private selectAll(checkbox: React.ChangeEvent<HTMLInputElement>) {
    for (let i = 0; i < this.state.letters.length; i++) {
      this.state.letters[i].checked = checkbox.target.checked;
    }
    this.setState({});
  }

  private deleteOnclick() {
    let kek = 0;
    while (kek++ < 4) {
      let hasAny = false;
      for (let i = 0; i < this.state.letters.length; i++) {
        if (this.state.letters[i].checked) {
          this.state.letters.splice(i, 1);
          hasAny = true;
          break;
        }
      }
      if (hasAny) {
        continue;
      }
      break;
    }
    this.setState(state => {
      return state;
    });
  }

  private newLetter() {
    const author = rndAuthor();
    this.state.letters.unshift({
      author,
      theme: rndTheme(author),
      date: '6 июл',
      read: false,
      checked: false,
      authorImage: Letters.createYandexAuthorImage(),
      display: true
    });
    this.setState({});
  }

  public render() {
    return (
      <div className={`main ${this.state.theme}`}>
        <Logo theme={this.state.theme} />
        <Menu theme={this.state.theme} />
        <Writebox theme={this.state.theme} />
        <Search
          theme={this.state.theme}
          handleFilterChange={this.handleFilterChange}
          removeSearchTextInput={this.removeSearchTextInput}
          display={this.state.filterProcessingDisplay}
        />
        <ThemeSwitch changeTheme={this.changeTheme} />
        <Letters
          theme={this.state.theme}
          filter={this.state.filter}
          setFilterProcessingDisplay={this.setFilterProcessingDisplay}
          deleteOnclick={this.deleteOnclick}
          handleCheckbox={this.handleCheckbox}
          letters={this.state.letters}
          selectAll={this.selectAll}
        />
      </div>
    );
  }
}
