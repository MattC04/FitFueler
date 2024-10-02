import { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';
export interface DividerProps extends ViewProps {
    labelStyle?: StyleProp<TextStyle>;
    lineStyle?: StyleProp<ViewStyle>;
}
export interface DividerStyles {
    container?: ViewStyle;
    label?: TextStyle;
    line?: ViewStyle;
}
