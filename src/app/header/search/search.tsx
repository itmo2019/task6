import *as React from 'react';

import styles from './search.module.css';
import cross from '../images/cross.png';

interface IProps {
  searchFunction: (text: string) => void;
}

export class Search extends React.Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  render() {
    return (
      <div className={styles.search}>
        <input className={styles.search__textSearch} type="text" placeholder="Поиск" onChange={event => this.props.searchFunction(event.target.value)} />
        <img className={styles.search__cross} alt="cross" src={cross} />
      </div>
    );
  }
}
