import React, { CSSProperties } from 'react';

import cross from './cross.png'
import cross0 from './cross0.png'

import {ISearchProps, ThemeContext, IThemeContext} from '../app/app'

import styles from './search.module.css';

function Search({searchField, searchCallback, searching}: ISearchProps) {
    return  <div className={styles['search']}>
                <input type="text" className={styles['field']}
                    placeholder="Поиск"
                    value={searchField} 
                    onChange={event => searchCallback(event.target.value)} />
                    <ThemeContext.Consumer>{(context: IThemeContext) => 
                        <React.Fragment>
                            <div className={styles['progress-bar']} 
                                style={{width: searching == 1 ? 0 : `${searching*100}%`}} />
                            <img className={styles['clear-button']}
                                alt={"delete all"}
                                src={context.value ? cross0 : cross} 
                                onClick={() => searchCallback('')} />
                        </React.Fragment>
                    }</ThemeContext.Consumer>
            </div>   
}

export default Search
