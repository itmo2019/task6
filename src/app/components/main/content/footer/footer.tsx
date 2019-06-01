import * as React from 'react';
import styles from './footer.module.css';
import { Info } from './info/info';

interface IProps {
  nightMode: boolean;
}

export class Footer extends React.Component<IProps> {
  render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : styles.day;
    return (
      <div className={`${styles.footer} ${color}`}>
        <Info nightMode={nightMode}/>
      </div>
    );
  }
}
