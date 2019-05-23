import React, { Component } from 'react';

import styles from './menu.module.css';
import { MenuButtons } from './menuButtons/menuButtons';
import { NewLetterButton } from './newLetterButton/newLetterButton';

interface IProps {
  newLetterButtonOnClick: () => void;
}

export class Menu extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div className={styles.menu}>
        <NewLetterButton newLetterButtonOnClick={this.props.newLetterButtonOnClick} />
        <MenuButtons />
      </div>
    );
  }
}
