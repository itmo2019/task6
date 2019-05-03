import React, { Component, FunctionComponent, ReactElement } from 'react';
import bemify from '../../utils/bemify';
import styles from './aside-menu.module.css';
import {ThemeContext} from "../../theme/theme-context";

const b = bemify('aside-menu', styles);

const AsideMenuFolder: FunctionComponent<{
  children: string | ReactElement,
  active?: boolean,
  main?: boolean
}> = (props) => {
  const theme = React.useContext(ThemeContext);

  return <a className={b('folder', {active: props.active, main: props.main, theme: theme})}>{props.children}</a>;
};

class AsideMenu extends Component {
  render(): React.ReactNode {
    const theme = this.context;

    return (
      <div>
        <button type="button" className={b('compose-button', {theme: theme})}>
          Написать
        </button>
        <div className={b('folder-list', {theme: theme})}>
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

AsideMenu.contextType = ThemeContext;

export default AsideMenu;
