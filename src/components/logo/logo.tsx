import React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import cx from 'classnames';

import logoImgLight from '../../resources/images/yandexLogo_Light.svg';
import logoImgDark from '../../resources/images/yandexLogo_Dark1.svg';

import styles from './logo.module.css';

type Props = {
  className?: string,
  theme: string
}

const Logo = (props: Props) => {
  console.log('Logo');
  const { className, theme } = props;
  const logoClassName = cx(styles.box, {
    [`${className}`]: className
  });

  function themeSwitch(theme: string) {
    switch (theme) {
      case 'dark':
        return logoImgDark;
      default:
        return logoImgLight;
    }
  }

  return (
    <div className={logoClassName}>
      <img src={themeSwitch(theme)} alt="Яндекс Почта" />
      <a className={styles.item_img_yandex} href="https://yandex.ru" />
      <a className={styles.item_img_mail} href="https://mail.yandex.ru" />
    </div>
  );
};

const checkPropsChange = (props: Props, nextProps: Props) =>
  nextProps.theme !== props.theme;

export default shouldUpdate(checkPropsChange)(Logo);
