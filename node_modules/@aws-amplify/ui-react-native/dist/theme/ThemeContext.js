import * as React from 'react';
import { createTheme } from './createTheme';
export const ThemeContext = React.createContext({
    theme: createTheme(),
});
