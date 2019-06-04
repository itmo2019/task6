import React from 'react';

import './colorButton.css';


function ColorButton({changeColor} : {changeColor: () => void }) {
    return (
      <button id="colorButton" onClick={changeColor}>перейти на темную сторону</button>
    );
}

export default ColorButton;