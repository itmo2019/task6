import React from 'react';
import './FooterBar.css';

export class FooterBar extends React.Component {
  render() {
    return (
      <nav className="footer-bar">
        <a className="footer-link footer-bar__item" href="#help">
          Помощь и обратная связь
        </a>
        <a className="footer-link footer-bar__item" href="#adv">
          Реклама
        </a>
        <a className="footer-link footer-bar__item" href="#yandex">
          &#9400; 2001—2018, Яндекc
        </a>
      </nav>
    );
  }
}
