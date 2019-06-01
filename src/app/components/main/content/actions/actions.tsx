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
  constructor(props: IProps) {
    super(props);
    this.state = {
      actionsCheck: false
    };
    this.actionsCheck = this.actionsCheck.bind(this);
  }

  createAction = (name: string, onClickFunction: (() => void) | undefined, color: string) => {
    return (
      <button
        type="button"
        className={color}
        onClick={onClickFunction}
      >
        {name}
      </button>
    );
  };

  actionsCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;
    this.props.checkAll(isChecked);
    this.setState({ actionsCheck: isChecked });
  }

  render() {
    const { nightMode } = this.props;
    const actionsColor = nightMode ? styles.night : styles.day;
    const actionColor = nightMode ? styles.action_night : styles.action;
    const actions = [
      { name: 'Переслать', function: undefined },
      { name: 'Удалить', function: this.props.remove },
      { name: 'Это спам!', function: undefined },
      { name: 'Прочитано', function: undefined }
    ];
    return (
      <div className={`${actionsColor}`}>
        <input
          className={styles.check}
          type="checkbox"
          checked={this.state.actionsCheck}
          onChange={this.actionsCheck}
        />
        {actions.map(element =>
          this.createAction(element.name, element.function, actionColor)
        )}
      </div>
    );
  }
}
