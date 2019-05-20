import React from 'react';

import './searchInput.css';
import reset from '../images/reset.png';

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputVal = '';
  }

  resetForm = () => {
    this.inputVal.value = '';
  };

  render() {
    return (
      <div className="header__search">
        <input
          type="text"
          ref={el => (this.inputVal = el)}
          placeholder="Поиск"
          className="header__input"
        />
        <button type="button" className="header__button" onClick={this.resetForm}>
          <img src={reset} height="12" width="12" alt="reset" />
        </button>
      </div>
    );
  }
}
