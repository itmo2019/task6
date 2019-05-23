import React, { Component } from 'react';

import styles from './contentHeaderMenu.module.css';
import { ContentHeaderMenuButton } from './contentHeaderMenuButton/contentHeaderMenuButton';

interface IProps {
  deleteLetters: () => void;
}

export class ContentHeaderMenu extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div className={styles.contentHeaderMenu}>
        <ContentHeaderMenuButton name="Переслать" onClick={() => {}} />
        <ContentHeaderMenuButton name="Удалить" onClick={this.props.deleteLetters} />
        <ContentHeaderMenuButton name="Это спам!" onClick={() => {}} />
        <ContentHeaderMenuButton name="Прочитано" onClick={() => {}} />
      </div>
    );
  }
}
