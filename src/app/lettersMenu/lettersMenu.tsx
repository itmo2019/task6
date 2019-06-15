import *as React from 'react';

import styles from './lettersMenu.module.css';
import classnames from 'classnames';

interface IProps {
  selectAll: boolean;
  chooseAllLetters: () => void;
  markLettersToDelete: () => void;
  isDark: boolean;
}
export class LettersMenu extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <ul className={styles.lettersMenu}>
        <li className={styles.lettersMenu__horizontalPosition}>
          <input
            className={this.props.isDark ? styles.lettersMenu__checkbox_dark : styles.lettersMenu__checkbox}
            type="checkbox"
            checked={this.props.selectAll}
            onChange={this.props.chooseAllLetters}
          />
        </li>
        <li className={styles.lettersMenu__horizontalPosition}>
          <button className={classnames(styles.lettersMenu__button__textTitle, styles.lettersMenu__button__delLine)}>
            Переслать
          </button>
        </li>

        <li className={styles.lettersMenu__horizontalPosition}>
          <button
            className={classnames(styles.lettersMenu__button__textTitle, styles.lettersMenu__button__delLine)}
            onClick={this.props.markLettersToDelete}
          >
            Удалить
          </button>
        </li>

        <li className={styles.lettersMenu__horizontalPosition}>
          <button className={classnames(styles.lettersMenu__button__textTitle, styles.lettersMenu__button__delLine)}>
            Это спам!
          </button>
        </li>

        <li className={styles.lettersMenu__horizontalPosition}>
          <button className={classnames(styles.lettersMenu__button__textTitle, styles.lettersMenu__button__delLine)}>
            Прочитано
          </button>
        </li>
      </ul>
    );
  }
}
