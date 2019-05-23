import * as React from 'react';

import * as styles from './footer.module.css';

interface IFooterProps {
  theme: boolean;
}

export class Footer extends React.Component<IFooterProps> {
  public constructor(props: IFooterProps) {
    super(props);

    this.getFooterClass = this.getFooterClass.bind(this);
  }

  private getFooterClass() {
    return !this.props.theme ? styles.footer : styles.footerDark;
  }

  public render() {
    return (
      <footer className={this.getFooterClass()}>
        <ul className={styles.menu}>
          <li className={styles.menuLink}>
            <a href="." className={styles.link}>
              <p>Помощь и обратная связь</p>
            </a>
          </li>

          <li className={styles.menuLink}>
            <a href="." className={styles.link}>
              <p>Реклама</p>
            </a>
          </li>

          <li className={styles.menuLink}>
            <p className={styles.myCopy}>&copy; 2001-2018, Яндекс</p>
          </li>
        </ul>
      </footer>
    );
  }
}
