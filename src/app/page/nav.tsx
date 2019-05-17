import React, { Component } from 'react';

import * as pageStyles from './page.module.css';

interface NavProps {
  newLetter: () => void
}

export class Nav extends Component<NavProps> {

  constructor(props: NavProps) {
    super(props);
  }
  render() {
    return (
      <nav className={pageStyles.navigation}>
        <button
          className={pageStyles.navigationWriteButton}
          type="button"
          onClick={this.props.newLetter}
        >
          <p className={pageStyles.navigationWriteText}>Написать</p>
        </button>
        <ul className={pageStyles.navigationList}>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={pageStyles.navigationContentCurrent}>
                <div className={pageStyles.navigationTextCurrent}>
                  Входящие
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={pageStyles.navigationContent}>
                <div className={pageStyles.navigationText}>Отправленные</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={pageStyles.navigationContent}>
                <div className={pageStyles.navigationText}>Удаленные</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={pageStyles.navigationContent}>
                <div className={pageStyles.navigationText}>Спам</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={pageStyles.navigationContent}>
                <div className={pageStyles.navigationText}>Черновики</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className={pageStyles.navigationLink}>
              <div className={pageStyles.navigationContent}>
                <div className={pageStyles.navigationText}>Создать папку</div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
