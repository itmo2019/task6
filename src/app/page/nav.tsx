import * as React from 'react';

import * as pageStyles from './page.module.css';

interface INavProps {
  newLetter: () => void;
  theme: boolean;
}

export class Nav extends React.Component<INavProps> {
  public constructor(props: INavProps) {
    super(props);

    this.getWriteButtonClass = this.getWriteButtonClass.bind(this);
    this.getNavigationContentCurrentClass = this.getNavigationContentCurrentClass.bind(this);
    this.getNavigationTextClass = this.getNavigationTextClass.bind(this);
    this.getNavigationTextCurrentClass = this.getNavigationTextCurrentClass.bind(this);
    this.getNavigationContentClass = this.getNavigationContentClass.bind(this);
  }

  private getWriteButtonClass() {
    return !this.props.theme
      ? pageStyles.navigationWriteButton
      : pageStyles.navigationWriteButtonDark;
  }

  private getNavigationContentCurrentClass() {
    return !this.props.theme
      ? pageStyles.navigationContentCurrent
      : pageStyles.navigationContentCurrentDark;
  }

  private getNavigationTextClass() {
    return !this.props.theme ? pageStyles.navigationText : pageStyles.navigationTextDark;
  }

  private getNavigationTextCurrentClass() {
    return !this.props.theme
      ? pageStyles.navigationTextCurrent
      : pageStyles.navigationTextCurrentDark;
  }

  private getNavigationContentClass() {
    return !this.props.theme ? pageStyles.navigationContent : pageStyles.navigationContentDark;
  }

  public render() {
    return (
      <nav className={pageStyles.navigation}>
        <button className={this.getWriteButtonClass()} type="button" onClick={this.props.newLetter}>
          <p className={pageStyles.navigationWriteText}>Написать</p>
        </button>
        <ul className={pageStyles.navigationList}>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={this.getNavigationContentCurrentClass()}>
                <div className={this.getNavigationTextCurrentClass()}>Входящие</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={this.getNavigationContentClass()}>
                <div className={this.getNavigationTextClass()}>Отправленные</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={this.getNavigationContentClass()}>
                <div className={this.getNavigationTextClass()}>Удаленные</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={this.getNavigationContentClass()}>
                <div className={this.getNavigationTextClass()}>Спам</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={this.getNavigationContentClass()}>
                <div className={this.getNavigationTextClass()}>Черновики</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={this.getNavigationContentClass()}>
                <div className={this.getNavigationTextClass()}>Создать папку</div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
