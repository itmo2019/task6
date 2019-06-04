import React,  { Component } from 'react';

import './texts.css';
import ILetter from '../interfaces/ILetter'

interface IProps {
  letter: ILetter;
  onOpenClick: (id:number, value: string) => void;
}

function  Texts (props: IProps) {
  console.log('Search');
  const {letter, onOpenClick} = props;
  
  return (
      <div>
          <input type="checkbox" id={"show-letter" + letter.id} className="letters__show-action" 
          onChange={() => onOpenClick(letter.id, letter.textletter)} 
          />
          <label className="close" htmlFor={"show-letter"   + letter.id}>x</label>
          <div className="letters__text">{"От: " + letter.authtor}<br />{letter.textletter}</div>
        </div>
  );
}; 

export default Texts;