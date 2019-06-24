import React, { Component, RefObject } from 'react';
import cn from 'classnames';
import styles from './Letter.module.css';
import stylesHead from './LetterHeader.module.css';

interface IProps {
  allLettersChose: (a: boolean) => void;
  letterAdded: (a: number) => void;
  lettersDeleted: () => void;
  changeColor: () => void;
}

export class LetterHeader extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
    this.markerRef = React.createRef();
  }

  private markerRef: RefObject<HTMLInputElement>;

  public render() {
    const sqBut = cn(styles.squareForButton, stylesHead.headerPart);

    return (
      <ul className={stylesHead.header}>
        <li className={sqBut}>
          <label>
            <input
              ref={this.markerRef}
              type="checkbox"
              name="CCC"
              className={styles.inputButton}
              onClick={() => {
                const inpButton = this.markerRef.current;
                if (inpButton !== null) {
                  this.props.allLettersChose(inpButton.checked);
                }
              }}
            />
            <div className={styles.selectButton}></div>
          </label>
        </li>
        <li className={stylesHead.headerPart}>
          <input
            type="button"
            name="resendButton"
            value="Переслать"
            className={stylesHead.headerButtons}
            onClick={() => this.props.letterAdded(0)}
          />
        </li>
        <li className={stylesHead.headerPart}>
          <input
            type="button"
            name="deleteButton"
            value="Удалить"
            className={stylesHead.headerButtons}
            onClick={() => {
              const inpButton = this.markerRef.current;
              if (inpButton !== null) {
                inpButton.checked = false;
              }
              this.props.lettersDeleted();
            }}
          />
        </li>
        <li className={stylesHead.headerPart}>
          <input
            type="button"
            name="spamButton"
            value="Это спам!"
            className={stylesHead.headerButtons}
          />
        </li>
        <li className={stylesHead.headerPart}>
          <input
            type="button"
            name="readButton"
            value="Прочитано"
            className={stylesHead.headerButtons}
          />
        </li>
        <li className={stylesHead.headerPart}>
          <input
            type="button"
            name="themeButton"
            value="Другая тема"
            className={stylesHead.headerButtons}
            onClick={() => {
              this.props.changeColor();
            }}
          />
        </li>
      </ul>
    );
  }
}
