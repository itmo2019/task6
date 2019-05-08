import React from 'react';

import styles from './yandex-service-logo.module.css';

import YandexMail from '../../resources/yandex-mail.png';

class YandexServiceLogo extends React.Component {
  render() {
    return (
      <div className={styles['header__yandex-service-logo']}>
        <a className={styles['yandex-service-logo__image-link']} href="https://mail.yandex.ru/">
          <img className={styles['yandex-service-logo__image']} src={YandexMail} alt="Логотип Яндекс почты" />
        </a>
      </div>
    );
  }
}

export default YandexServiceLogo;
