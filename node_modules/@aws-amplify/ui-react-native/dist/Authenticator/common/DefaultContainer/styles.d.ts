import { ViewStyle } from 'react-native';
import { StrictTheme } from '../../../theme';
import { ContainerStyles, InnerContainerStyles } from './types';
export declare const getThemedStyles: ({ tokens: { colors } }: StrictTheme, insetPadding: Pick<ViewStyle, 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop'>) => Required<ContainerStyles>;
export declare const getInnerContainerStyles: ({ tokens: { space }, }: StrictTheme) => InnerContainerStyles;
