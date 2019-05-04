import React from "react";

export enum themes {
    light = 'light',
    dark = 'dark',
}

export const ThemeContext = React.createContext(
    themes.light
);

export const ThemeProvider = ThemeContext.Provider;