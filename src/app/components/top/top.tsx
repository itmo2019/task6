import * as React from 'react';
import styles from './top.module.css';

import mailLogoDay from '../../../resources/images/mail-logo-day.png';
import mailLogoNight from '../../../resources/images/mail-logo-night.png';
import { Strips } from './strips/strips';
import { Search } from './search/search';
import { NightMode } from './night-mode/nightMode';

interface IProps {
  nightMode: boolean,
  newQuery: (q: string) => void,
  switchMode: () => void
}

export class Top extends React.Component<IProps> {
  render() {
    const { nightMode } = this.props;
    return (
      <div className="top">
        <Strips nightMode={nightMode}/>
        <img className={styles['mail-logo']} src={nightMode ? mailLogoNight : mailLogoDay} alt="Yandex" />
        <Search nightMode={nightMode} newQuery={this.props.newQuery}/>
        <NightMode nightMode={nightMode} switchMode={this.props.switchMode}/>
      </div>
    );
  }
}
