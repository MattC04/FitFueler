import * as React from 'react';
import { StrictTheme } from './types';
export interface ThemeContextType {
    theme: StrictTheme;
}
export declare const ThemeContext: React.Context<ThemeContextType>;
