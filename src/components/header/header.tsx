import React from 'react';

import Logo from '../logo';
import Search from '../search';

import { ISearchProps } from '../app/app'
import { ThemeContext, IThemeContext } from '../app/app'

import theme_icon from './theme.png'
import theme0_icon from './theme0.png'

import styles from './header.module.css';

function Header(props: ISearchProps) {
    return  <header className={styles['header']}>
                <div className={styles['logo-wrapper']}>
                    <Logo />
                </div>
                <div className={styles['search-wrapper']}>
                    <div className={styles['search-wrapper1']}>
                        <Search {...props} />
                    </div>
                </div>
                <ThemeContext.Consumer>{ (context: IThemeContext) =>
                    <img className={styles['theme-switcher']}
                        src={context.value ? theme0_icon : theme_icon}
                        width="30px"
                        height="30px"
                        alt="theme" 
                        onClick={() => {context.switcher()}} /> 
                }</ThemeContext.Consumer>
            </header>  
}

export default Header; 
