import React from 'react';

import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <a className="footer-link" href="/" onClick={(click) => {
        click.preventDefault();
      }}>
        Помощь и обратная связь
      </a>
      <a className="footer-link" href="/" onClick={(click) => {
        click.preventDefault();
      }}>
        Реклама
      </a>
      <a className="footer-link" href="/" onClick={(click) => {
        click.preventDefault();
      }}>
        © 2001—2018, Яндекс
      </a>
    </div>
  );
}

export default Footer;
