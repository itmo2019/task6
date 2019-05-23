import * as React from 'react';

export const ThemeContext = React.createContext<Theme>('dark');

export type Theme = 'dark' | 'light';

export const getThemed = function (cssHash: string | undefined, style: any, theme: Theme): string {
  const css = cssHash ? Object.keys(style).find(key => style[key] === cssHash) : undefined;
  const themed = css ? style[css + "--" + theme] : undefined;
  const result = [];
  if (cssHash) {
    result.push(cssHash)
  }
  if (themed) {
    result.push(themed)
  }
  return result.join(' ')
};
