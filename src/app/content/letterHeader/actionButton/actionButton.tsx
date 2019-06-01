import React, { Component } from 'react'

const styles = require('./ActionButton.module.css')

interface IActionButtonProps {
	disabled: boolean;
	name: string;
	onClick?: () => void;
}

export class ActionButton extends Component<IActionButtonProps, any> {
	render() {
		return (
			<div className={[styles.actionButton, this.props.disabled ? styles.disabled : ''].join(' ')} onClick={this.props.onClick}>
				<a  href="#">
					{this.props.name}
				</a>
			</div>
		)
	}
}
