import *as React from 'react';

import styles from './left-menu.module.css';
import { MenuButtons } from './menuButtons';
import { NewLetterButton } from './newLetterButton';

interface IProps {
  newLetterButtonOnClick: () => void;
}

export class Menu extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }
  public readonly props: IProps;

  render() {
    return (
      <div className={styles.leftMenu}>
        <NewLetterButton onClick={this.props.newLetterButtonOnClick}/>
        <MenuButtons />
      </div>
    );
  }
}
