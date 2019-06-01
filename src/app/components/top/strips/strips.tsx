import * as React from 'react';
import styles from './strips.module.css';

interface IProps {
  nightMode: boolean
}

export class Strips extends React.Component<IProps> {
  render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : '';
    return (
      <div className={styles.strips}>
        <div className={`${styles.strip} ${color}`} />
        <div className={`${styles.strip} ${color}`} />
        <div className={`${styles.strip} ${color}`} />
      </div>
    );
  }
}
