import React, { Component } from 'react';

import styles from './main.module.css';
import { Menu } from './menu/menu';
import { Content } from './content/content';
import { LetterType } from '../types/types';

interface IProps {
  searchText: string;
  isDark: boolean;
  letters: LetterType[];
  deleteLetters: () => void;
  isAllChecked: boolean;
  checkedLetterIds: { [id: string]: boolean };
  onCheckboxChange: (id: string) => void;
  selectAll: () => void;
  removeAddAnimation: (id: string) => void;
  removeLetter: (id: string) => void;
  newMail: () => void;
}

export class Main extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <main className={styles.main}>
        <Menu newLetterButtonOnClick={this.props.newMail} />
        <Content
          letters={this.props.letters}
          deleteLetters={this.props.deleteLetters}
          checkedLetterIds={this.props.checkedLetterIds}
          onCheckboxChange={this.props.onCheckboxChange}
          isAllChecked={this.props.isAllChecked}
          selectAll={this.props.selectAll}
          isDark={this.props.isDark}
          removeAddAnimation={this.props.removeAddAnimation}
          removeLetter={this.props.removeLetter}
          searchText={this.props.searchText}
        />
      </main>
    );
  }
}
