import React, { Props } from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import cx from 'classnames';
import LinkBlock from '../linkBlock/linkBlock';

import styles from './nav.module.css';

interface IProps {
  className?: string;
  theme: string;
}

const items = [
  { key: 1, link: '/public/index.html', title: 'Входящиe', isSelect: true },
  { key: 2, link: '/public/index.html', title: 'Отправленные' },
  { key: 3, link: '/public/index.html', title: 'Удалённые' },
  { key: 4, link: '/public/index.html', title: 'Спам' },
  { key: 5, link: '/public/index.html', title: 'Черновики' },
  { key: 6, link: '/public/index.html', title: 'Создать папку' }
];

const Nav = (props: IProps) => {
  console.log('Nav');
  const { className, theme } = props;

  const listItems = items.map(item => {
    const itemClassName = cx(styles.item, styles[`item_theme_${theme}`], {
      [styles.item_select]: item.isSelect
    });

    return (
      <li key={item.key} className={itemClassName}>
        <a className={styles.item_type_link} href={item.link}>
          {item.title}
        </a>
      </li>
    );
  });
  const navClassName = cx(styles.box, className);

  return (
    <nav className={navClassName}>
      <LinkBlock title="Написать" />
      <ul className={styles.list}>{listItems}</ul>
    </nav>
  );
};

const checkPropsChange = (props: IProps, nextProps: IProps) => nextProps.theme !== props.theme;

export default shouldUpdate(checkPropsChange)(Nav);
