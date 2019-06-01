import React, { Component } from 'react';

const styles = require('./MainMenuButton.module.css')

interface MainMenuButtonProps {
	name: string
}

export class MainMenuButton extends Component<MainMenuButtonProps, {}> {
	render() {
		return (
			<div className={styles.button}>
				<a className={styles.link} href="#">
					{this.props.name}
				</a>
			</div>
		)
	}
}