import React, { Component } from 'react'

const styles = require('./LetterHeader.module.css')
const utilCss = require('util/UtilCss.module.css')
import { FancyCheckbox } from '../../../util/fancyCheckbox'
import { ActionButton } from './actionButton'

interface ILetterHeader {
  letterOpened: boolean;
  masterChecked: boolean;
  toggleMasterSelection: () => void;
  markDeleteSelectedLetters: () => void;
}

export class LetterHeader extends Component<ILetterHeader, {}> {
  render() {
	let disabled = this.props.letterOpened
    return (
      <header className={[styles.header, utilCss.noselect].join(' ')}>
        <FancyCheckbox additionalClasses={styles.headerItem}
					checked={this.props.masterChecked} 
					disabled={disabled}
					onChange={this.props.toggleMasterSelection} />
        <ActionButton name="Переслать" disabled={disabled} />
        <ActionButton name="Удалить" disabled={disabled} onClick={this.props.markDeleteSelectedLetters} />
        <ActionButton name="Это спам!" disabled={disabled} />
        <ActionButton name="Прочитано" disabled={disabled} />
      </header>
    )
  }
}
