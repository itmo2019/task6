import React, { Component } from 'react';

import styles from './FancyCheckbox.module.css';

interface IFancyCheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  additionalClasses: string;
}

export class FancyCheckbox extends Component<IFancyCheckboxProps, {}> {
  public render() {
    const checkedClass = this.props.checked ? styles.checkbox_checked : '';
    const disabledClass = this.props.disabled ? styles.checkbox_disabled : '';
    return (
      <span
        className={`${styles.checkbox} ${
          this.props.additionalClasses
        } ${checkedClass} ${disabledClass}`}
        onClick={this.props.onChange}
      />
    );
  }
}
