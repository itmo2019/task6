import React, { Component } from 'react';

import styles from './FancyCheckbox.module.css';
import classNames from 'classnames/bind'

const c = classNames.bind(styles)

interface IFancyCheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  additionalClasses: string;
}

export class FancyCheckbox extends Component<IFancyCheckboxProps, {}> {
  public render() {
    let spanClass = c({
      checkbox_checked: this.props.checked,
      checkbox_disabled: this.props.disabled,
      checkbox: true
    }, this.props.additionalClasses)
    return (
      <span
        className={spanClass}
        onClick={this.props.onChange}
      />
    );
  }
}
