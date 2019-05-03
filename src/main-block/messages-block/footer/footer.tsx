import React from 'react';

import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__links-list">
        <li className="link-container">
          <a className="footer-link" href="#" onClick={(click) => {
            click.preventDefault();
          }}>
            Помощь и обратная связь
          </a>
        </li>
        <li className="link-container">
          <a className="footer-link" href="#" onClick={(click) => {
            click.preventDefault();
          }}>
            Реклама
          </a>
        </li>
        <li className="link-container">
          <a className="footer-link" href="#" onClick={(click) => {
            click.preventDefault();
          }}>
            © 2001—2018, Яндекс
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
