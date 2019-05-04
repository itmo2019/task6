import React, { Component } from 'react';

import './search.css';
import SearchSuggestion from './__suggestion/search__suggestion';
import SearchCross from './__cross/search__cross';

export default class Search extends Component {
  render() {
    return (
      <section id="search">
        <SearchSuggestion />
        <SearchCross />
      </section>
    );
  }
}
