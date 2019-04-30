import React, {Component, FunctionComponent, ReactElement} from 'react';
import bemify from '../../utils/bemify';
import styles from './footer.module.css';

const b = bemify('footer', styles);

const FooterItem: FunctionComponent<{
  children: string | ReactElement
}> = (props) => {
  return <a className={b('item')}>{props.children}</a>;
};

class Footer extends Component {
  render(): React.ReactNode {
    return (
      <div className={b()}>
        <div className={b('menu')}>
          <FooterItem>Помощь и обратная связь</FooterItem>
          <FooterItem>Реклама</FooterItem>
          <FooterItem>&copy;&nbsp;2001—2019,&nbsp;</FooterItem>
          <a href="https://yandex.ru/" className={b('item', { author: true })}>
            Яндекс
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
