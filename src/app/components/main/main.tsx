import * as React from 'react';
import styles from './main.module.css';

import { Menu } from './menu/menu';
import { Content } from './content/content';
import { ILetter } from '../../letterUtils';

interface IProps {
  nightMode: boolean;
  newMail: () => void;
  letters: ILetter[];
  remove: () => void;
  check: (id: string) => void;
  checkAll: (isChecked: boolean) => void;
}

export class Main extends React.Component<IProps> {
  render() {
    const { nightMode } = this.props;
    return (
      <div className={styles.main}>
        <Menu nightMode={nightMode} newMail={this.props.newMail} />
        <Content
          nightMode={nightMode}
          letters={this.props.letters}
          remove={this.props.remove}
          check={this.props.check}
          checkAll={this.props.checkAll}
        />
      </div>
    );
  }
}
