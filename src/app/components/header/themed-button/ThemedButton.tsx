import React from 'react'
import {ThemeContext, themes} from "../../../../theme/theme-context";
import styles from './ThemedButton.module.css';

interface IProps {
    changeTheme: () => void
}

class ThemedButton extends React.Component<IProps> {

    render() {
        let theme = this.context;
        const buttonColor = theme === themes.light ? styles.light : styles.dark;
        return (
            <button className={`${styles.button} ${buttonColor}`}
                onClick={this.props.changeTheme}
            >{theme === themes.light ? "Dark" : "Light"}</button>
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;