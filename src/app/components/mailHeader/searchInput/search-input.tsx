import * as React from 'react';

import * as styles from './search-input.module.css';

interface IProps {
  bLight: boolean;
  updateSearchInput: (query: string) => void;
}

export class SearchInput extends React.Component<IProps, {}> {
  public constructor(props: IProps) {
    super(props);
    this.search = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  private readonly search: React.RefObject<HTMLInputElement>;

  private handleInputChange() {
    const inputValue: string = this.search.current ? this.search.current.value : '';
    this.props.updateSearchInput(inputValue);
  }

  public render() {
    return (
      <input
        className={`${styles.search} ${
          this.props.bLight ? styles['search-light'] : styles['search-dark']
        }`}
        placeholder="Поиск"
        type="search"
        ref={this.search}
        onChange={this.handleInputChange}
      />
    );
  }
}
