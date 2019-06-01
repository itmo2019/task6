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
  filter: string;
  letters: ILetter[];
  deleteOnclick(): void;
  handleCheckbox(event: React.ChangeEvent<HTMLInputElement>, number: number): void;
  setFilterProcessingDisplay(display: boolean): void;
  selectAll(checkbox: React.ChangeEvent<HTMLInputElement>): void;
}

interface IState {
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
      articleHeader: 'Header',
      articleContent: 'Content',
      mode: 'letters'
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  //
  // public shouldComponentUpdate(
  //   nextProps: Readonly<IProps>,
  //   nextState: Readonly<IState>,
  //   nextContext: any
  // ): boolean {
  //
  //   boolean
  //
  //   return (
  //     this.props.filter !== nextProps.filter ||
  //     this.props.theme !== nextProps.theme ||
  //     this.state !== nextState ||
  //     this.props.letters !== nextProps.letters
  //   );
  // }
  //
  // public componentDidUpdate(
  //   prevProps: Readonly<IProps>,
  //   prevState: Readonly<IState>,
  //   snapshot?: any
  // ): void {
  //   this.props.setFilterProcessingDisplay(false);
  // }

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
        letters={this.props.letters}
        handleCheckbox={this.props.handleCheckbox}
        open={this.open}
        theme={this.props.theme}
      />
    );
  }

  public open(number: number): void {
    const articleHeader = this.props.letters[number].theme;
    const articleContentOrUndefined = contents.get(articleHeader);
    let articleContent = 'none';
    if (articleContentOrUndefined !== undefined) {
      articleContent = articleContentOrUndefined;
    }
    this.props.letters[number].read = true;
    this.setState({
      articleHeader,
      articleContent,
      mode: 'article'
    });
  }

  private close() {
    this.setState({
      mode: 'letters'
    });
  }

  private getTheme() {
    if (this.props.theme === 'light') {
      return styles.light;
    }
    return styles.dark;
  }

  private lineTheme() {
    if (this.props.theme === 'light') {
      return letterStyles.lineLight;
    }
    return letterStyles.lineDark;
  }

  public render() {
    return (
      <div className={`${styles.letters} ${this.getTheme()}`}>
        <input
          type="checkbox"
          className={letterStyles.marker}
          id="letters__first-checkbox"
          onChange={this.props.selectAll}
        />
        <div className={`${letterStyles.line} ${this.lineTheme()}`} />
        <LettersOpmenu deleteOnclick={this.props.deleteOnclick} theme={this.props.theme} />
        {this.createView()}
        <div className={`${letterStyles.line} ${this.lineTheme()}`} id="letters__footer-line" />
        <LettersFooter />
      </div>
    );
  }
}
