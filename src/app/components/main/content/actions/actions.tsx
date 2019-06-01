import * as React from 'react';
import styles from './actions.module.css';

interface IProps {
  nightMode: boolean;
  remove: () => void;
  checkAll: (val: boolean) => void;
}

interface IState {
  actionsCheck: boolean;
}

export class Actions extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      actionsCheck: false
    };
    this.actionsCheck = this.actionsCheck.bind(this);
  }

  private static createAction(name: string, onClickFunction: (() => void) | undefined, color: string) {
    return (
      <button
        type="button"
        className={`${styles.action} ${color}`}
        onClick={onClickFunction}
      >
        {name}
      </button>
    );
  };

  private actionsCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;
    this.props.checkAll(isChecked);
    this.setState({ actionsCheck: isChecked });
  }

  public render() {
    const { nightMode } = this.props;
    const actionsColor = nightMode ? styles.actions_night : '';
    const actionColor = nightMode ? styles.action_night : '';
    const actions = [
      { name: 'Переслать', function: undefined },
      { name: 'Удалить', function: this.props.remove },
      { name: 'Это спам!', function: undefined },
      { name: 'Прочитано', function: undefined }
    ];
    return (
      <div className={`${styles.actions} ${actionsColor}`}>
        <input
          className={styles.check}
          type="checkbox"
          checked={this.state.actionsCheck}
          onChange={this.actionsCheck}
        />
        {actions.map(element =>
          Actions.createAction(element.name, element.function, actionColor)
        )}
      </div>
    );
  }
}
