import React from 'react'
import styles from './nightMode.module.css';

interface IProps {
  nightMode: boolean;
  switchMode: () => void;
}

export class NightMode extends React.Component<IProps> {
  render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : styles.day;
    return (
      <button className={`${styles.button} ${color}`}
              onClick={this.props.switchMode}
      >
        {nightMode ? "Day" : "Night"}
      </button>
    );
  }
}
