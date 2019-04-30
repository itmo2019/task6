import React, {Component, FunctionComponent, ReactElement} from 'react';
import bemify from '../../utils/bemify';
import styles from './top-menu.module.css';
import Check from '../check/index';

const b = bemify('top-menu', styles);

const TopMenuItem: FunctionComponent<{
  children: string | ReactElement,
  onClick?: () => void
}> = (props) => {
  return (
    <span onClick={props.onClick} className={b('item')}>
      {props.children}
    </span>
  );
};

interface Props {
  checked: boolean,
  checkAll: () => void,
  animateChecked: () => void,
  disableCheckbox: boolean
}

class TopMenu extends Component<Props, {}> {
  render(): React.ReactNode {
    return (
      <div className={b()}>
        <Check
          checked={this.props.checked}
          callback={this.props.checkAll}
          disabled={this.props.disableCheckbox}
        />
        <div className={b('button-list')}>
          <TopMenuItem>Переслать</TopMenuItem>
          <TopMenuItem onClick={this.props.animateChecked}>Удалить</TopMenuItem>
          <TopMenuItem>Это спам!</TopMenuItem>
          <TopMenuItem>Прочитано</TopMenuItem>
        </div>
      </div>
    );
  }
}

export default TopMenu;
