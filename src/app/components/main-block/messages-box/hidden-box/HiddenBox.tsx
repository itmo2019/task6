import React from 'react';
import styles from './HiddenBox.module.css';
import {ThemeContext, themes} from "../../../../../theme/theme-context";
interface IProps {
    closeMessage: () => void
    messageText: string
}
export class HiddenBox extends React.Component<IProps> {
  render() {
    const fontStyle = this.context === themes.light ? styles.light : styles.dark;
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
        <div className={`${styles.content} ${fontStyle}`}>{this.props.messageText}</div>
      </div>
    );
  }
}

HiddenBox.contextType = ThemeContext;
