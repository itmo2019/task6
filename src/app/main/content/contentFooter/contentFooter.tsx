import *as React from 'react';

import styles from './contentFooter.module.css';
import { ContentFooterText } from './contentFooterText';

export class ContentFooter extends React.Component {
  render() {
    return (
      <div className={styles.contentFooter}>
        <ContentFooterText text="&copy; 2001 - 2018, Яндекс" />
        <ContentFooterText text="Реклама" />
        <ContentFooterText text="Помощь и обратная связь" />
      </div>
    );
  }
}
