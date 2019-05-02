import React from 'react';

import './header.css';

interface InjectedProps {
  handleSelectAll: any;
  deleteSelected: any;
  selectAllCheckbox: any;
}

class Header extends React.Component<InjectedProps> {
  render() {
    return (
      <div className="messages-block-header">
        <input
          type="checkbox"
          className="checkbox"
          id="check-all"
          checked={this.props.selectAllCheckbox}
          onChange={() => {
            this.props.handleSelectAll();
          }}
        />
        <button type="button" className="messages-block-header__action button-to-div">
          Переслать
        </button>
        <button
          type="button"
          className="messages-block-header__action button-to-div"
          id="delete-messages"
          onClick={() => {
            this.props.deleteSelected();
          }}
        >
          Удалить
        </button>
        <button type="button" className="messages-block-header__action button-to-div">
          Это спам!
        </button>
        <button type="button" className="messages-block-header__action button-to-div">
          Прочитано
        </button>
      </div>
    );
  }
}

export default Header;
