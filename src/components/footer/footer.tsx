import React, {Component, FunctionComponent, ReactElement} from 'react';
import bemify from '../../utils/bemify';
import styles from './footer.module.css';
import {ThemeContext} from "../../theme/theme-context";

const b = bemify('footer', styles);

const FooterItem: FunctionComponent<{
  children: string | ReactElement
}> = (props) => {
  const theme = React.useContext(ThemeContext);

  return <a className={b('item', {theme: theme})}>{props.children}</a>;
};

class Footer extends Component {
  render(): React.ReactNode {
    const theme = this.context;

    return (
      <div className={b({theme: theme})}>
        <div className={b('menu')}>
          <FooterItem>Помощь и обратная связь</FooterItem>
          <FooterItem>Реклама</FooterItem>
          <FooterItem>&copy;&nbsp;2001—2019,&nbsp;</FooterItem>
          <a href="https://yandex.ru/" className={b('item', { author: true, theme: theme })}>
            Яндекс
          </a>
        </div>
      </div>
    );
  }
}

Footer.contextType = ThemeContext;

export default Footer;
