import * as React from 'react';
import { createTheme } from './createTheme';
import { ThemeContext } from './ThemeContext';
export const ThemeProvider = ({ children, theme, colorMode, }) => {
    const value = React.useMemo(() => ({ theme: createTheme(theme, colorMode) }), [theme, colorMode]);
    return (<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>);
};
