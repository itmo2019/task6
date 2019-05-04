import * as React from 'react';
import styles from './Hamburger.module.css';
import {ThemeContext, themes} from "../../../../theme/theme-context";

export class Hamburger extends React.Component {
    render() {
        const colorStyle = this.context === themes.light ? styles.light : styles.dark;
        return (
            <div className={styles.hamburger}>
                <div className={`${styles['single-strip']} ${colorStyle}`} />
                <div className={`${styles['single-strip']} ${colorStyle}`} />
                <div className={`${styles['single-strip']} ${colorStyle}`} />
            </div>
        );
    }
}

Hamburger.contextType = ThemeContext;
