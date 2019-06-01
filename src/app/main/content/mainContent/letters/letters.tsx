import *as React from 'react';

import styles from './letters.module.css';
import { Letter } from './letter';
import {ILetter} from '../../../../types/type';

interface IProps {
  searchText: string;
  letters: ILetter[];
  checkedLetterIds: {[id: string]: boolean};
  changeCheckbox: (id: number) => void;
  openLetter: (text: string[]) => void;
  removeAnimation: (id: number) => void;
  deleteLetter: (id: number) => void;
  isDark: boolean;
}

export class Letters extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  private searchPredicate = (text: string[]) => {
    return text.find((value: string) => {
      return value.includes(this.props.searchText);
    });
  };

  render() {
    return (
      <div className={styles.letters}>
        {this.props.letters.map(letter => {
          if (letter.isVisible && this.searchPredicate(letter.text))
            return (
              <Letter
                isDark={this.props.isDark}
                key={letter.id}
                id={letter.id}
                text={letter.text}
                author={letter.author}
                subject={letter.subject}
                date={letter.date}
                isChecked={this.props.checkedLetterIds[letter.id]}
                changeCheckbox={this.props.changeCheckbox}
                openLetter={this.props.openLetter}
                removeAnimation={this.props.removeAnimation}
                deleteLetter={this.props.deleteLetter}
                addAnimation={letter.addAnimation}
                deleteAnimation={letter.deleteAnimation}
              />
            );
        })}
      </div>
    );
  }
}
