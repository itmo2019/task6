import React from 'react';

import './hidden-message.css';

class HiddenMessage extends React.Component {
  render() {
    const classAddition = this.props.messageIsOpen ? '__open' : '__closed';
    return (
      <div className={`hidden-message hidden-message${classAddition}`}>
        <button
          type="button"
          className="close-message"
          onClick={() => {
            this.props.closeMessage();
          }}
        >
          &times;
        </button>

        <div className="hidden-message__content">{this.props.hiddenMessageText}</div>
      </div>
    );
  }
}

export default HiddenMessage;
