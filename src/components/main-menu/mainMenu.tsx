import React, { Component } from 'react';

import styles from './MainMenu.module.css';
import utilCss from '../../util/UtilCss.module.css';
import { MainMenuButton } from '../main-menu-button';
import classNames from 'classnames';

interface MainMenuProps {
  createNewMail: () => void;
  folderNames: string[];
  curFolder: string;
  changeCurFolder: (a: string) => void;
}

export class MainMenu extends Component<MainMenuProps, any> {
  public render() {
    return (
      <nav className={classNames(styles.mainMenu, utilCss.noselect)}>
        <button className={styles.sendButton} onClick={this.props.createNewMail}>
          Написать
        </button>
        {this.props.folderNames.map(name => (
          <MainMenuButton
            isCurrent={name === this.props.curFolder}
            name={name}
            key={name}
            onClick={() => this.props.changeCurFolder(name)} />
        ))}
      </nav>
    );
  }
}
