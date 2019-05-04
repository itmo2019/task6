import React from 'react';
import styles from './Header.module.css';

import yaLogoLight from '../../../resources/images/yandex-mail-light.png';
import yaLogoDark from '../../../resources/images/yandex-mail-dark.png';
import {Hamburger} from './hamburger/Hamburger';
import {SearchBox} from './search-box/SearchBox';
import ThemedButton from "./themed-button/ThemedButton";
import {ThemeContext, themes} from "../../../theme/theme-context";

interface IProps {
    changeTheme: () => void
}

export class Header extends React.Component<IProps> {
    render() {
        return (
            <div className={styles.header}>
                <Hamburger/>
                <img className={styles['ya-logo']} src={this.context === themes.light ? yaLogoLight : yaLogoDark} alt="yandex"/>
                <SearchBox/>
                <ThemedButton changeTheme={this.props.changeTheme}/>
            </div>
        );
    }
}

Header.contextType = ThemeContext;
