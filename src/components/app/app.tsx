import React, { createContext } from 'react';
import cookie from 'react-cookies';

import Header from '../header';
import MainPage from '../main-page';

import styles from './app.module.css';

export interface ISearchProps {
    searchField: string,
    searching: number,
    searchCallback(value: string): void
}
export interface IThemeContext {
    value: boolean,
    switcher: () => void
}

export const ThemeContext = createContext({value: false, switcher: () => {}})

export default class App extends React.Component {

    _switcher() {
        cookie.save('theme', '' + !(this as App).state.theme);
        (this as App).setState((state: { searchField: string, theme: boolean }) => {return {theme: !state.theme}})
    }
    switcher = this._switcher.bind(this)
    
    _getTheme(): boolean {
        let res: boolean = cookie.load('theme') === 'true'
        if (res === undefined) {
            cookie.save('theme', 'false')
            res = false
        }
        return res
    }
    getTheme = this._getTheme.bind(this)
    
    public state: { searchField: string, searching: number, theme: boolean } = { searchField: '', searching: 1.0, theme: this.getTheme() }

    _setSearching(x: number) {
        (this as App).setState({searching: x})
    }
    setSearching = this._setSearching.bind(this)

    render() {
        let className=styles['app'];
        if (this.state.theme) {
            className += ' ' + styles['app_dark-theme']
        }
        return  <ThemeContext.Provider value={{value: this.state.theme, switcher: () => this.switcher()}}>
                    <div className={className}>
                        <div className={styles['container']}>
                            <Header  
                                searchField={this.state.searchField} 
                                searching={this.state.searching}
                                searchCallback={(value: string) => this.setState({searchField: value})} />
                            <MainPage 
                                searchField={this.state.searchField}
                                setSearching={this.setSearching} />
                        </div>
                    </div>
                </ThemeContext.Provider>
    }
}
