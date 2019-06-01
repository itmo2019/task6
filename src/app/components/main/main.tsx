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
  checkAll: (value: boolean) => void;
  check: (id: string) => void;
  query: string;
}

export class Main extends React.Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { nightMode } = this.props;
    return (
      <div className={styles.main}>
        <Menu nightMode={nightMode} newMail={this.props.newMail} />
        <Content
          nightMode={nightMode}
          letters={this.props.letters}
          remove={this.props.remove}
          checkAll={this.props.checkAll}
          check={this.props.check}
        />
      </div>
    );
  }
}
