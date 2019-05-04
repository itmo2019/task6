import React from 'react';

import './hidden-message.css';

interface InjectedProps {
  closeMessage: () => void;
  messageIsOpen: boolean;
  hiddenMessageText: String;
}

class HiddenMessage extends React.Component<InjectedProps> {
  render() {
    const classAddition = this.props.messageIsOpen ? '__open' : '__closed';
    return (
      <div className={`hidden-message hidden-message${classAddition}`} aria-hidden={!this.props.messageIsOpen}
           aria-live="polite">
        <button
          aria-controls="hidden-message"
          aria-label={'Закрыть сообщение'}
          type="button"
          className="close-message"
          onClick={() => {
            this.props.closeMessage();
          }}
        >
          &times;
        </button>

        <div className="hidden-message__content" tabIndex={0}>
          {this.props.hiddenMessageText}
        </div>
      </div>
    );
  }
}

export default HiddenMessage;
