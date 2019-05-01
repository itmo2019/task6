import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Footer.module.css';

interface IFooter {
  className?: string;
}

interface IFooterItem {
  ref?: string;
  text?: string;
}

function FooterItem(props: IFooterItem) {
  const ref = props.ref === undefined ? '.' : props.ref;
  const text = props.text === undefined ? 'Элемент footer' : props.text;

  return (
    <li className={styles.Footer__Item}>
      <a className={styles.Footer__Text} href={ref}>
        {text}
      </a>
    </li>
  );
}

export class Footer extends Component<IFooter> {
  public render() {
    return (
      <footer className={classNames(styles.Footer, this.props.className)}>
        <div className={styles.Footer__Box}>
          <ul className={styles.Footer__List}>
            <FooterItem text="Помощь и обратная связь" />
            <FooterItem text="Здесь могла бы быть ваша реклама с очень длинным названием, которое не вмещается в окно" />
            <FooterItem text="&copy; 2001-2018, Яндекс" />
          </ul>
        </div>
      </footer>
    );
  }
}
