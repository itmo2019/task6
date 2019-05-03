import React from 'react';
import styles from './HiddenBox.module.css';
interface IProps {
    closeMessage: () => void
    messageText: string
}
export class HiddenBox extends React.Component<IProps> {
  render() {
    return (
      <div className="hidden-box">
        <div
          onKeyPress={undefined}
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
