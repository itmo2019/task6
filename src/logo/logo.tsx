import React from 'react';

import './logo.css';
import logo_img from '../source/logo.jpg'

//currentTheme 
interface IProps {
  currentTheme: string;
}
function chooseBackground (arg0 : string)  {
    console.log(arg0)
    var tmp: string = ""
    if (arg0 =="ligth") {
      tmp =  " dark";
    }
    else if (arg0 == "dark") {
      tmp =  " light";
    }
    console.log(tmp)
    return "yandex body__yandex" + tmp
  }

function Logo(props: IProps) {
	const {currentTheme} = props;

    return (
        <div className= {chooseBackground(currentTheme)}>
            <img src={logo_img}
            alt="Лого яндекса"
            height="31"
            width="153"
            className="yandex__logo" />
            <div className = "bg"> </div>
        </div>
    );
}

export default Logo;