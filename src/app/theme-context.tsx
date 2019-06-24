import React from 'react'

export enum Theme {
  light = 'light',
  night = 'night'
}

export const ThemeContext = React.createContext(Theme.light)
export const ThemeProvider = ThemeContext.Provider
