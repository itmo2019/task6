import React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import cx from 'classnames';

import styles from './supportLine.module.css';

interface IProps {
  theme: string;
}

const items = [
  { key: 1, title: 'Помощь и обратная связь', href: 'https://yandex.ru/support/mail/' },
  { key: 2, title: 'Реклама', href: 'https://yandex.ru/adv/' },
  { key: 3, title: '© 2001—2019,' },
  { key: 4, title: 'Яндекс', href: 'https://yandex.ru' }
];

const SupportLine = (props: IProps) => {
  console.log('SupportLine');
  const { theme } = props;

  const listItems = items.map(item => {
    const itemClassName = cx(
      styles.item,
      styles[`item_theme_${theme}`],
      item.href === undefined ? styles.item_type_text : styles.item_type_link
    );

    return item.href === undefined ? (
      <div key={item.key} className={itemClassName}>
        {item.title}
      </div>
    ) : (
      <a key={item.key} className={itemClassName} href={item.href}>
        {item.title}
      </a>
    );
  });

  return <div className={styles.itemLine}>{listItems}</div>;
};

const checkPropsChange = (props: IProps, nextProps: IProps) => nextProps.theme !== props.theme;

export default shouldUpdate(checkPropsChange)(SupportLine);
