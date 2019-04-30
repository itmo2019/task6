import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './check.module.css';

const b = bemify('check', styles);

interface Props {
  checked: boolean,
  callback: () => void,
  disabled?: boolean
}

interface State {
  checked: boolean
}

class Check extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      checked: props.checked
    };
  }
  onChange() {
    this.props.callback();
    this.setState({
      checked: true
    });
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.checked !== undefined) {
      return { checked: props.checked };
    } else {
      return state;
    }
  }

  render(): React.ReactNode {
    const checked: boolean = this.state.checked;

    return (
      <div className={b()}>
        <label>
          <input
            onChange={this.onChange}
            checked={checked}
            type="checkbox"
            id="check-all"
            className={b('input')}
            disabled={this.props.disabled}
          />
          <span className={b('box')} />
        </label>
      </div>
    );
  }
}

export default Check;
