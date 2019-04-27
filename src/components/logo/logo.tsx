import React from 'react';

import logo_pic from './logo.png';

import styles from './logo.module.css';

function Logo() {
    return  <div className={styles['logo']}>
                <div className={styles['burger']}>
                    <div className={styles['burger-1']}></div>
                </div>
                <img className={styles['title']} alt="логотип" src={logo_pic} width="153" height="31" />
            </div>  
}

export default Logo;
