import React, { Component } from 'react'

const utilCss = require('util/UtilCss.module.css')
const styles = require('./SearchField.module.css')
const cross = require('./resources/cross.png')

interface ISearchFieldProps {
  searchValue: string;
  onSearchChange: (a: string)=>void;
  clearSearchValue: ()=>void;
}

export class SearchField extends Component<ISearchFieldProps, {}> {

  render() {
    return (
			<div className={styles.searchField}>
					<input className={styles.input} placeholder="Поиск" type="search" value={this.props.searchValue} onChange={(e) => {this.props.onSearchChange(e.currentTarget.value);}} />
					<span className={utilCss.noselect}>
						<img className={styles.closeImage} draggable={false} src={cross} alt="x" onClick={this.props.clearSearchValue} />
					</span>
			</div>
    )
  }
}
