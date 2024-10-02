import * as React from 'react';
import { ThemeContext } from './ThemeContext';
export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    return context.theme;
};
