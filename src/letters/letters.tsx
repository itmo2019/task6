import React, { Component } from 'react';

import styles from './Letters.module.css';
import letterStyles from './__letter/Letter.module.css';
import LettersOpmenu from './__opmenu/letters__opmenu';
import LettersList from './__list/letters__list';
import LettersArticle from './__article/letters__article';
import LettersFooter from './__footer/letters__footer';
import { getRandomInt, rndAuthor, rndTheme, contents } from './content';
import yandexOval from '../images/Oval-9.png';
import ya from '../images/Fill-154.png';
import { ILetter } from './__letter/letters__letter';

interface IProps {
  theme: string;
}

interface IState {
  letters: ILetter[];
  articleHeader: string;
  articleContent: string;
  mode: string;
}

export default class Letters extends Component<IProps, IState> {
  public static createYandexAuthorImage() {
    return (
      <div className={letterStyles.authorImage}>
        <figure className={letterStyles.yandexOval}>
          <img src={yandexOval} alt="Yandex" />
        </figure>
        <figure className={letterStyles.Ya}>
          <img src={ya} alt="Yandex" />
        </figure>
      </div>
    );
  }

  public constructor(props: IProps) {
    super(props);
    this.state = {
      letters: [
        {
          author: 'Яндекс.Паспорт',
          theme: 'Доступ к аккаунту восстановлен',
          date: '6 авг',
          authorImage: Letters.createYandexAuthorImage(),
          read: false,
          checked: false
        },
        {
          author: 'Команда Яндекс.Почты',
          theme: 'Как читать почту с мобильного',
          date: '6 июл',
          authorImage: Letters.createYandexAuthorImage(),
          read: false,
          checked: false
        },
        {
          author: 'Команда Яндекс.Почты',
          theme: 'Как читать почту с мобильного',
          date: '6 июл',
          authorImage: Letters.createYandexAuthorImage(),
          read: true,
          checked: false
        },
        {
          author: 'Яндекс',
          theme: 'Соберите всю почту в этот ящик',
          date: '6 июл',
          authorImage: Letters.createYandexAuthorImage(),
          read: true,
          checked: false
        }
      ],
      articleHeader: 'Header',
      articleContent: 'Content',
      mode: 'letters'
    };
    this.newLetter = this.newLetter.bind(this);
    this.deleteOnclick = this.deleteOnclick.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.selectAll = this.selectAll.bind(this);
  }

  public componentDidMount() {
    let sum = 0;

    for (let i = 1; i < 10; i++) {
      sum += 10 * getRandomInt(1, 600);
      setTimeout(this.newLetter, sum);
    }
  }

  private processFilter(s: string) {
    if (s === "") {
      for (let i = 0; i < this.state.letters.length; i++) {
        
      }
      return;
    }

  }

  private newLetter() {
    const author = rndAuthor();
    this.state.letters.unshift({
      author,
      theme: rndTheme(author),
      date: '6 июл',
      read: false,
      checked: false,
      authorImage: Letters.createYandexAuthorImage()
    });
    this.setState(state => {
      return state;
    });
  }

  private handleCheckbox(checkbox: React.ChangeEvent<HTMLInputElement>, number: number) {
    this.state.letters[number].checked = checkbox.target.checked;
    this.setState(state => {
      return state;
    });
  }

  public open(number: number): void {
    const articleHeader = this.state.letters[number].theme;
    const articleContentOrUndefined = contents.get(articleHeader);
    let articleContent = 'none';
    if (articleContentOrUndefined !== undefined) {
      articleContent = articleContentOrUndefined;
    }
    this.state.letters[number].read = true;
    this.setState({
      articleHeader,
      articleContent,
      mode: 'article'
    });
  }

  private createView() {
    if (this.state.mode === 'article') {
      return (
        <LettersArticle
          articleHeader={this.state.articleHeader}
          articleContent={this.state.articleContent}
          close={this.close}
          theme={this.props.theme}
        />
      );
    }
    return (
      <LettersList
        letters={this.state.letters}
        handleCheckbox={this.handleCheckbox}
        open={this.open}
        theme={this.props.theme}
      />
    );
  }

  private close() {
    this.setState({
      mode: 'letters'
    });
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

  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }

  private selectAll(checkbox: React.ChangeEvent<HTMLInputElement>) {
    for (let i = 0; i < this.state.letters.length; i++) {
      this.state.letters[i].checked = checkbox.target.checked;
    }
    this.setState({});
  }

  public render() {
    return (
      <div className={`${styles.letters} ${this.getTheme()}`}>
        <input type="checkbox" className={letterStyles.marker} id="letters__first-checkbox" onChange={this.selectAll} />
        <div className={letterStyles.line} />
        <LettersOpmenu deleteOnclick={this.deleteOnclick} theme={this.props.theme} />
        {this.createView()}
        <div className="letters__line" id="letters__footer-line" />
        <LettersFooter />
      </div>
    );
  }
}
