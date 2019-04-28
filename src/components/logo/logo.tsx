import React from 'react';

import logo_pic from './logo.png';
import logo_pic0 from './logo0.png';

import styles from './logo.module.css';
import { ThemeContext, IThemeContext } from '../app/app';

function Logo() {
    return  <ThemeContext.Consumer>{(context: IThemeContext) => 
                <div className={styles['logo']}>
                    {context.value ? <div className={styles['burger'] + ' ' + styles['burger_dark-theme']}>
                                        <div className={styles['burger-1'] + ' '+ styles['burger-1_dark-theme']}></div>
                                     </div>
                                   : <div className={styles['burger']}>
                                        <div className={styles['burger-1']}></div>
                                     </div>}
                    <img className={styles['title']} alt="логотип" src={context.value ? logo_pic0 : logo_pic} width="153" height="31" />
                </div>  
            }</ThemeContext.Consumer>
}

export default Logo;
