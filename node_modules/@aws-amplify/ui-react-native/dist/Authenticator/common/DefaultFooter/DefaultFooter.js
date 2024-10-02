import React from 'react';
import { View } from 'react-native';
export default function DefaultFooter({ children, ...rest }) {
    return children ? <View {...rest}>{children}</View> : null;
}
