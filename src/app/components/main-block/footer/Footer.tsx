import React from 'react';
import styles from './Footer.module.css';
import { FooterBar } from './footer-bar/FooterBar';

export class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <FooterBar />
      </div>
    );
  }
}
