import * as React from 'react';
import { ColorMode, Theme } from './types';
interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: Theme;
    colorMode?: ColorMode;
}
export declare const ThemeProvider: ({ children, theme, colorMode, }: ThemeProviderProps) => JSX.Element;
export {};
