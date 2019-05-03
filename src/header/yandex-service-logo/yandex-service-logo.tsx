import React from 'react';

import './yandex-service-logo.css';

import YandexMail from '../../resources/yandex-mail.png';

function YandexServiceLogo() {
  return (
    <div className="header__yandex-service-logo">
      <a className="yandex-service-logo__image-link" href="https://mail.yandex.ru/">
        <img className="yandex-service-logo__image" src={YandexMail} alt="Логотип Яндекс почты" />
      </a>
    </div>
  );
}

export default YandexServiceLogo;
