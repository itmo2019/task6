import React from 'react';

import Logo from '../logo';
import Search from '../search';

import { ISearchProps } from '../app/app'

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
            </header>  
}

export default Header; 
