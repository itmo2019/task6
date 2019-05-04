import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './FullMessage.module.css';
import closeLogo from '../../resources/img/close.png';

interface IFullMessage {
  className?: string;
  closeMessage?: () => void;
  text?: string;
}

interface IFullMessageState {
  closeMessage?: () => void;
  text?: string;
}

export class FullMessage extends Component<IFullMessage, IFullMessageState> {
  public constructor(props: IFullMessage) {
    super(props);
    this.state = {
      closeMessage: props.closeMessage,
      text: props.text
    };
  }

  public render() {
    return (
      <div className={classNames(styles.FullMessage, this.props.className)}>
        <button
          className={styles.FullMessage__CloseButton}
          type="button"
          onClick={this.state.closeMessage}
        >
          <img className={styles.FullMessage__CloseLogo} src={closeLogo} alt="Закрыть" />
        </button>
        <div className={styles.FullMessage__Text}>{this.state.text}</div>
      </div>
    );
  }
}
