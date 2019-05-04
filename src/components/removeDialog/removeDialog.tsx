import React, { Component } from 'react';
import styles from './RemoveDialog.module.css';

const dialogPolyfill = require('dialog-polyfill').default;

interface IRemoveDialog {
  className?: string;
  isVisible: boolean;
  confirmedAction: () => void;
}

interface IRemoveDialogState {
  isVisible: boolean;
}

export class RemoveDialog extends Component<IRemoveDialog, IRemoveDialogState> {
  public constructor(props: IRemoveDialog) {
    super(props);

    this.dialog = null;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.confirm = this.confirm.bind(this);
    this.showHideCallback = this.showHideCallback.bind(this);
    this.state = {
      isVisible: props.isVisible
    };
  }

  public componentDidMount() {
    if (this.state.isVisible) {
      this.show();
    }
  }

  public componentWillReceiveProps(nextProps: IRemoveDialog) {
    if (nextProps.isVisible !== this.state.isVisible) {
      this.setState({ isVisible: nextProps.isVisible }, this.showHideCallback);
    }
  }

  private dialog: HTMLDialogElement | null;

  private showHideCallback() {
    if (this.state.isVisible) {
      this.show();
    } else {
      this.hide();
    }
  }

  private show() {
    this.setState({ isVisible: true });
    if (this.dialog !== null) {
      this.dialog.showModal();
    }
  }

  private hide() {
    this.setState({ isVisible: false });
    if (this.dialog !== null) {
      this.dialog.close();
    }
  }

  private confirm() {
    if (this.dialog !== null) {
      this.props.confirmedAction();
    }
  }

  public render() {
    return (
      <dialog
        className={styles.RemoveDialog}
        ref={ref => {
          this.dialog = ref;
          if (ref !== null) {
            dialogPolyfill.registerDialog(ref);
          }
        }}
      >
        <h3 className={styles.RemoveDialog__Title}>
          {'Вы действительно хотите удалить выбранные письма?'}
        </h3>
        <menu>
          <button
            className={styles.RemoveDialog__ConfirmButton}
            type="submit"
            value="confirm"
            onClick={this.confirm}
          >
            Удалить
          </button>
          <button
            className={styles.RemoveDialog__CancelButton}
            type="submit"
            value="cancel"
            onClick={this.hide}
          >
            Отмена
          </button>
        </menu>
      </dialog>
    );
  }
}
