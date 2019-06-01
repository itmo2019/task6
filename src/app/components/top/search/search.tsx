import * as React from 'react';
import styles from './search.module.css';

interface IProps {
  nightMode: boolean,
  newQuery: (q: string) => void,
  query: string
}

export class Search extends React.Component<IProps> {
  private readonly search: React.RefObject<HTMLInputElement>;

  public constructor(props: IProps) {
    super(props);
    this.search = React.createRef();
    this.input = this.input.bind(this);
  }

  private input = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const query = this.props.query;
    if (e.keyCode == 8 || e.keyCode == 46) {
      this.props.newQuery(query.substr(0, query.length - 1));
    } else if (e.key >= 'а' && e.key <= 'я') {
      this.props.newQuery(query + e.key);
    }
  };

  public render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : '';
    return (
      <div className={`${styles.search} ${color}`}>
        <input className={`${styles['entry-field']} ${color}`} placeholder="Поиск" ref={this.search} onKeyUp={this.input}/>
        <div className={styles['close-icon']}>𐄂</div>
      </div>
    );
  }
}
