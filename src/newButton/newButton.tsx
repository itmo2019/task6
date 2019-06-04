import React from 'react';

import './newButton.css';


function NewButton({addNewLetter} : {addNewLetter : () => void }) {
    return (
      <button id="newButton" onClick={addNewLetter}>новое письмо</button>
    );
}

export default NewButton;