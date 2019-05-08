import React from 'react';

import styles from './message-creator.module.css';

interface InjectedProps {
  newMailFunction: () => void;
}

class MessageCreator extends React.Component<InjectedProps> {
  render() {
    return (
      <button
        aria-controls="messages-list"
        className={styles['header__message-creator']}
        onClick={this.props.newMailFunction}
        type="button"
      >
        Создать письмо
      </button>
    );
  }
}

export default MessageCreator;
