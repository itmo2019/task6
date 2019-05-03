import React from 'react';

import './header.css';

interface InjectedProps {
  handleSelectAll: () => void;
  deleteSelected: () => void;
  selectAllCheckbox: boolean;
}

class Header extends React.Component<InjectedProps> {
  render() {
    return (
      <div className="messages-block-header">
        <label
          id="check-all-label"
          htmlFor="check-all"
        >
          <input
            type="checkbox"
            className="checkbox"
            id="check-all"
            checked={this.props.selectAllCheckbox}
            onChange={() => {
              this.props.handleSelectAll();
            }}
          />
        </label>
        <button type="button" className="messages-block-header__action button-to-div" disabled={true}>
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
        <button type="button" className="messages-block-header__action button-to-div" disabled={true}>
          Это спам!
        </button>
        <button type="button" className="messages-block-header__action button-to-div" disabled={true}>
          Прочитано
        </button>
      </div>
    );
  }
}

export default Header;
