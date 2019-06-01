import *as React from 'react';

import styles from './content.module.css';
import { ContentHeaderMenu } from './contentHeaderMenu';
import { MainContent } from './mainContent';
import { ContentFooter } from './contentFooter';
import {ILetter} from '../../types/type';

interface IProps {
  searchText: string;
  isAllChecked: boolean;
  selectAll: () => void;
  deleteLetters: () => void;
  removeAnimation: (id: number) => void;
  deleteLetter: (id: number) => void;
  letters: ILetter[];
  checkedLetterIds: {[id: string]: boolean};
  changeCheckbox: (id: number) => void;
  isDark: boolean;
}

export class Content extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <div className={this.props.isDark ? styles.content_dark : styles.content}>
        <ContentHeaderMenu
          isDark={this.props.isDark}
          isAllChecked={this.props.isAllChecked}
          selectAll={this.props.selectAll}
          deleteLetters={this.props.deleteLetters}
        />
        <MainContent
          searchText={this.props.searchText}
          isDark={this.props.isDark}
          letters={this.props.letters}
          changeCheckbox={this.props.changeCheckbox}
          checkedLetterIds={this.props.checkedLetterIds}
          removeAnimation={this.props.removeAnimation}
          deleteLetter={this.props.deleteLetter}
        />
        <ContentFooter />
      </div>
    );
  }
}
