import * as React from 'react';

import * as styles from './letter.module.css';

interface ILetterProps {
  text: string[];
  display: boolean;
  closeLetter: () => void;
  theme: boolean;
}

const close: string = require('../../images/cross-symbol.png');
const closeDark: string = require('../../images/cross-symbol-dark.png');

export class Letter extends React.Component<ILetterProps> {
  public constructor(props: ILetterProps) {
    super(props);

    this.makeClassName = this.makeClassName.bind(this);
    this.getTextClass = this.getTextClass.bind(this);
    this.getCloseImg = this.getCloseImg.bind(this);
  }

  private getTextClass() {
    return !this.props.theme ? styles.text : styles.textDark;
  }

  private getCloseImg() {
    return !this.props.theme ? close : closeDark;
  }

  private readonly makeClassName = () => {
    return this.props.display ? styles.letter : styles.hidden;
  };

  public render(): React.ReactNode {
    const letter = [];
    for (let i = 0; i < this.props.text.length; i++) {
      letter.push(<p className={this.getTextClass()}>{this.props.text[i]}</p>);
    }
    return (
      <div className={this.makeClassName()}>
        <article className={styles.myArticle}>{letter}</article>
        <a
          href="#"
          onClick={() => {
            this.props.closeLetter();
          }}
        >
          <img className={styles.closeImg} src={this.getCloseImg()} alt="close" />
        </a>
      </div>
    );
  }
}
