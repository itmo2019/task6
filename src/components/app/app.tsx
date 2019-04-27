import React from 'react';

import Header from '../header';
import MainPage from '../main-page';

import styles from './app.module.css';

export interface ISearchProps {
    searchField: string,
    searchCallback(value: string): void
}

export default class App extends React.Component {

    public state: {
        searchField: string
    } = {
        searchField: ''
    }
    
    render() {
        return  <div className={styles['app']}>
                    <Header  
                        searchField={this.state.searchField} 
                        searchCallback={(value: string) => this.setState({searchField: value})} />
                    <MainPage searchField={this.state.searchField} />
                </div>
    }
}
