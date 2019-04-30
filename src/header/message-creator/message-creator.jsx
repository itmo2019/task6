import React from 'react';

import './message-creator.css';

class MessageCreator extends React.Component {
  render() {
    return (
      <button
        className="header__message-creator"
        onClick={this.props.newMailFunction}
        type="button"
      >
        Создать письмо
      </button>
    );
  }
}

export default MessageCreator;
