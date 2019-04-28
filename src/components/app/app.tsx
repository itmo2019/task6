import React, { createContext } from 'react';
import cookie from 'react-cookies';

import Header from '../header';
import MainPage from '../main-page';

import styles from './app.module.css';

export interface ISearchProps {
    searchField: string,
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
    
    public state: { searchField: string, theme: boolean } = { searchField: '', theme: this.getTheme() }

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
                                searchCallback={(value: string) => this.setState({searchField: value})} />
                            <MainPage searchField={this.state.searchField} />
                        </div>
                    </div>
                </ThemeContext.Provider>
    }
}
