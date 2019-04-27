import React from 'react';

import cross from './cross.png'

import {ISearchProps} from '../app/app'

import styles from './search.module.css';

function Search({searchField, searchCallback}: ISearchProps) {
    return  <div className={styles['search']}>
                <input type="text" className={styles['field']}
                    placeholder="Поиск"
                    value={searchField} 
                    onChange={event => searchCallback(event.target.value)} />
                <img className={styles['clear-button']}
                    alt="delete all"
                    src={cross} 
                    onClick={() => searchCallback('')} />
            </div>   
}

export default Search
