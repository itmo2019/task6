import *as React from 'react';

import styles from './contentHeaderMenu.module.css';
import { ContentHeaderMenuButton } from './contentHeaderMenuButton';

interface IProps {
  isAllChecked: boolean;
  selectAll: () => void;
  deleteLetters: () => void;
  isDark: boolean;
}

export class ContentHeaderMenu extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <div className={styles.contentHeaderMenu}>
        <input
          className={this.props.isDark ? styles.contentHeaderMenu__checkbox_dark : styles.contentHeaderMenu__checkbox}
          type="checkbox"
          checked={this.props.isAllChecked}
          onChange={this.props.selectAll}
        />
        <ContentHeaderMenuButton name="Переслать" onClick={() => {}} />
        <ContentHeaderMenuButton name="Удалить" onClick={() => this.props.deleteLetters()} />
        <ContentHeaderMenuButton name="Это спам!" onClick={() => {}} />
        <ContentHeaderMenuButton name="Прочитано" onClick={() => {}} />
      </div>
    );
  }
}
