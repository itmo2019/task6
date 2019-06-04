import React, { Component } from 'react';
import './letter.css'

interface IProps {
	letterId: number;
	letterHidden: boolean;
	letterDeleted: boolean;
	letterUnread: boolean;
	isSelected: boolean
	onSelectChange: (arg0: number, arg1: boolean) => void;
	letterAuthtor: string;
	letterTextletter: string;
	letterDate: string;
}

export class Letter extends Component {
	constructor(props: IProps) {
    	super(props);
    	this.props = props;
  	}
	isHidden ({letterHidden}: {letterHidden : boolean}) {
		if (letterHidden) {
			return " hidden"
		}
		return  ""
	}
	isUnread = ({letterUnread}: {letterUnread: boolean}) => {
		if (letterUnread) {
			return " unread-letter"
		}
		return  ""
	}
	
	isDeleted = (arg0 : boolean) => {
		if (arg0) {
			return " deleted"
		}
		return ""
	}
	readonly props: IProps;

	 render() {
	 	console.log(this.props)
	 	// c
	 	// const {hidden} = this.props;
	 	const {letterId, letterHidden, letterDeleted, letterUnread, isSelected} = this.props
	 	console.log(letterDeleted)
	    return (
	    	<div>
	    		
	    		<div id = {"letterid" + letterId} className = {"firstletter letters__firstletter" + this.isHidden({letterHidden}) + this.isDeleted(this.props.letterDeleted)}>
					<label id = {"letters__letter" + letterId} 
					htmlFor={"show-letter" + letterId} 
					className={"letter firstletter__clickme" + this.isUnread({letterUnread})}

					>
						<label id = {"ch"  + letterId} htmlFor={"checkbox"   + letterId} className="letter_checkbox" >
							<input id = {"checkbox"   + letterId}
							 type="checkbox" 
							 className="firstletter__box letter__box"
							 checked={this.props.isSelected}
							 onChange={() => this.props.onSelectChange(this.props.letterId, !this.props.isSelected)} />
						</label>

						<div className="firstletter__logo-authtor">{this.props.letterAuthtor[0]}</div>
						<div className="firstletter__authtor">{this.props.letterAuthtor}</div>
						<div className="letter__unread" style = {{display : this.props.letterUnread ? 'block' : 'none' }}></div> 
						<div className="firstletter__textletter">{this.props.letterTextletter}</div>
						<div className="firstletter__date">{this.props.letterDate}</div>
					</label>
				</div>
	    	</div>
	    );
    }
	
}

export default Letter