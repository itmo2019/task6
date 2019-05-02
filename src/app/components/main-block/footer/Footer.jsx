import React from 'react';
import './Footer.css';
import { FooterBar } from './footer-bar/FooterBar';

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <FooterBar />
      </div>
    );
  }
}
