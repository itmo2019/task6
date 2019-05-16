import React from 'react';
import styles from './TopBar.module.css';
import { HorizontalNavPanel } from './horizontal-nav-panel/HorizontalNavPanel';

interface IProps {
    topBarCheckboxHandler: (val: boolean) => void
    deleteMessages: () => void
}

interface IState {
    topBarCheckboxChecked: boolean
}

export class TopBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      topBarCheckboxChecked: false
    };
    this.handleChangeTopBarCheckbox = this.handleChangeTopBarCheckbox.bind(this);
  }

  handleChangeTopBarCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;
    this.props.topBarCheckboxHandler(isChecked);
    this.setState({ topBarCheckboxChecked: isChecked });
  }

  render() {
    return (
      <div className={styles['top-bar']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={this.state.topBarCheckboxChecked}
          onChange={this.handleChangeTopBarCheckbox}
        />
        <HorizontalNavPanel deleteMessages={this.props.deleteMessages} />
      </div>
    );
  }
}
