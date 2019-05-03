import React from 'react';
import styles from './Hamburger.module.css';

export class Hamburger extends React.Component {
  render() {
    return (
      <div className={styles.hamburger}>
        <div className={styles['single-strip']} />
        <div className={styles['single-strip']} />
        <div className={styles['single-strip']} />
      </div>
    );
  }
}
