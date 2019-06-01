import * as React from 'react';
import styles from './search.module.css';

interface IProps {
  nightMode: boolean,
  newQuery: (q: string) => void
}

export class Search extends React.Component<IProps> {
  public constructor(props: IProps) {
    super(props);
    this.search = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  private readonly search: React.RefObject<HTMLInputElement>;

  private handleInputChange() {
    const inputValue: string = this.search.current ? this.search.current.value : '';
    this.props.newQuery(inputValue);
  }

  render() {
    const { nightMode } = this.props;
    const color = nightMode ? styles.night : '';
    return (
      <div className={`${styles.search} ${color}`}>
        <input className={`${styles['entry-field']} ${color}`} placeholder="Поиск" ref={this.search} onChange={this.handleInputChange}/>
        <div className={`${styles['close-icon']} ${color}`}>𐄂</div>
      </div>
    );
  }
}
