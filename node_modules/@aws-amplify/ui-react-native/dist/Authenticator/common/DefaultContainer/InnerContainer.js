import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../theme';
import { getInnerContainerStyles } from './styles';
export default function InnerContainer({ children, ...rest }) {
    const theme = useTheme();
    const themedStyle = getInnerContainerStyles(theme);
    return (<View {...rest} style={themedStyle.container}>
      {children}
    </View>);
}
