import React from 'react';

import './message-creator.css';

interface InjectedProps {
  newMailFunction: () => void;
}

class MessageCreator extends React.Component<InjectedProps> {
  render() {
    return (
      <button
        aria-controls="messages-list"
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
