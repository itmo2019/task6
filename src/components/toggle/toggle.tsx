import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './toggle.module.css';

const b = bemify('toggle', styles);

interface Props {
  changeTheme: () => void
}

class Toggle extends Component<Props> {
  render(): React.ReactNode {
    return (
      <div className={b()}>
        <input type="checkbox" className={b('checkbox')} id="toggle" defaultChecked />
          <label className={b('label')} htmlFor="toggle">
            <span onTransitionEnd={this.props.changeTheme} className={b('inner')} />
            <span className={b('switch')} />
          </label>
      </div>
    );
  }
}

export default Toggle;
