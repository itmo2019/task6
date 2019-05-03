import React from 'react';
import styles from './HiddenBox.module.css';

export class HiddenBox extends React.Component {
  render() {
    return (
      <div className="hidden-box">
        <div
          onKeyPress=""
          role="button"
          aria-hidden
          className={styles['cancel-btn']}
          onClick={() => {
            this.props.closeMessage();
          }}
        >
          X
        </div>
        <div className={styles.content}>{this.props.messageText}</div>
      </div>
    );
  }
}
