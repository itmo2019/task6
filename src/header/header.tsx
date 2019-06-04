import React, { Component }  from 'react';

import './header.css';
import spinner from '../source/spinner.gif'

interface IProps {
	isAllSelected : boolean;
	onDelete: () => void;
	onSelectAll: () => void;
}
/*<img id = "spinner"
			          src = {spinner}
			          width = "40"
			          height = "40"
			          />*/
function  Header(props: IProps) {
  const {isAllSelected, onDelete, onSelectAll} = props;
  return (
	      <div className = "header window__header">
	      			
					<input type="checkbox" 
					className="header__box-item" 
					id = "set-all-box" 
					checked={isAllSelected}
					onChange={e => onSelectAll()}/>
					<input type="submit" name="forward" className = "header__item" value="Переслать" />
					<button id="delButton"
						onClick={e => onDelete()}
					>Удалить</button>
					<input type="submit" name="spam" className = "header__item" value="Это спам!" />
					<input type="submit" name="read" className = "header__item" value="Прочитано" />
					
			</div>
	    );
}; 

export default Header;