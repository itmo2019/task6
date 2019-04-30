import React, { Component, FunctionComponent, ReactElement } from 'react';
import bemify from '../../utils/bemify';
import styles from './aside-menu.module.css';

const b = bemify('aside-menu', styles);

const AsideMenuFolder: FunctionComponent<{
  children: string | ReactElement,
  active?: boolean,
  main?: boolean
}> = (props) => {
  return <a className={b('folder', {active: props.active, main: props.main})}>{props.children}</a>;
};

class AsideMenu extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <button type="button" className={b('compose-button')}>
          Написать
        </button>
        <div className={b('folder-list')}>
          <AsideMenuFolder active main>Входящие</AsideMenuFolder>
          <AsideMenuFolder>Отправленные</AsideMenuFolder>
          <AsideMenuFolder>Удаленные</AsideMenuFolder>
          <AsideMenuFolder>Спам</AsideMenuFolder>
          <AsideMenuFolder>Черновики</AsideMenuFolder>
          <AsideMenuFolder>Создать папку</AsideMenuFolder>
        </div>
      </div>
    );
  }
}

export default AsideMenu;
