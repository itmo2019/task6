import React from 'react';
import styles from './TopBar.module.css';
import { HorizontalNavPanel } from './horizontal-nav-panel/HorizontalNavPanel';

export class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topBarCheckboxChecked: false
    };
    this.handleChangeTopBarCheckbox = this.handleChangeTopBarCheckbox.bind(this);
  }

  handleChangeTopBarCheckbox(e) {
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
