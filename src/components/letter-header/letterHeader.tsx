import React, { Component } from 'react';

import styles from './LetterHeader.module.css';
import utilCss from '../../util/UtilCss.module.css';
import { FancyCheckbox } from '../fancy-checkbox';
import { ActionButton } from '../action-button';

interface ILetterHeader {
  letterOpened: boolean;
  masterChecked: boolean;
  toggleMasterSelection: () => void;
  markDeleteSelectedLetters: () => void;
}

export class LetterHeader extends Component<ILetterHeader, {}> {
  public render() {
    const disabled = this.props.letterOpened;
    return (
      <header className={[styles.header, utilCss.noselect].join(' ')}>
        <FancyCheckbox
          additionalClasses={styles.headerItem}
          checked={this.props.masterChecked}
          disabled={disabled}
          onChange={this.props.toggleMasterSelection}
        />
        <ActionButton name="Переслать" disabled={disabled} />
        <ActionButton
          name="Удалить"
          disabled={disabled}
          onClick={this.props.markDeleteSelectedLetters}
        />
        <ActionButton name="Это спам!" disabled={disabled} />
        <ActionButton name="Прочитано" disabled={disabled} />
      </header>
    );
  }
}
