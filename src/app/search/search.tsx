import *as React from 'react';

import styles from './search.module.css';
import cross from '../images/cross.png';

interface IProps {
  isClearInput: boolean;
  search: (text: string) => void;
}

export class Search extends React.Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  render() {
    return this.props.isClearInput ? (
      <div className={styles.search}>
        <input className={styles.search__textSearch} type="text" placeholder="Поиск"
               value={''}
               onChange={() => this.props.search('')}/>
        <img className={styles.search__cross} alt="cross" src={cross}/>
      </div>
    ) : (
      <div className={styles.search}>
        <input className={styles.search__textSearch} type="text" placeholder="Поиск"
               onChange={text => this.props.search(text.target.value)}/>
        <img className={styles.search__cross} alt="cross" src={cross}/>
      </div>
    );
  }
}
