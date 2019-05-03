import React from "react";

// export const themes = {
//   light: {
//     foreground: '#000000',
//     background: '#eeeeee',
//   },
//   dark: {
//     foreground: '#ffffff',
//     background: '#222222',
//   },
// };

export enum THEME {
  light = 'light',
  dark = 'dark',
}

export const ThemeContext = React.createContext(
  THEME.light
);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
