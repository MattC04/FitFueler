import { Theme, StrictTheme, ColorMode } from './types';
/**
 * This will be used like `const myTheme = createTheme({})`
 * `myTheme` can then be passed to a Provider
 * const myTheme = createTheme({})
 * const myOtherTheme = createTheme({}, myTheme);
 */
export declare const createTheme: (theme?: Theme, colorMode?: ColorMode) => StrictTheme;
