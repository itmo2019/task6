import * as React from 'react';
import styles from './search.module.css';

interface IProps {
  nightMode: boolean,
  newQuery: (q: string) => void,
  query: string
}

interface IState {
  query: string;
}

export class Search extends React.Component<IProps, IState> {
  private readonly search: React.RefObject<HTMLInputElement>;

  public constructor(props: IProps) {
    super(props);
    this.state = {
      query: props.query
    };
    this.search = React.createRef();
    this.inputChange = this.inputChange.bind(this);
  }

  private inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(
      {
        query: e.target.value
      }
    );
    this.props.newQuery(e.target.value);
  }

  public render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : '';
    return (
      <div className={`${styles.search} ${color}`}>
        <input className={`${styles['entry-field']} ${color}`} value={this.state.query} placeholder="Поиск" ref={this.search} onChange={this.inputChange}/>
        <div className={styles['close-icon']}>𐄂</div>
      </div>
    );
  }
}
