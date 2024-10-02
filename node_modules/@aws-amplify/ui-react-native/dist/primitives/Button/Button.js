import React, { useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { capitalize } from '@aws-amplify/ui';
import { usePressableContainerStyles } from '../../hooks';
import { useTheme } from '../../theme';
import { getThemedStyles } from './styles';
export default function Button({ accessibilityRole = 'button', children, disabled, style, textStyle, variant = 'default', ...rest }) {
    const theme = useTheme();
    const themedStyle = getThemedStyles(theme);
    const containerStyle = useMemo(() => ({
        ...themedStyle.container,
        ...themedStyle[`container${capitalize(variant)}`],
        ...(disabled && themedStyle.disabled),
    }), [disabled, themedStyle, variant]);
    const pressableStyle = usePressableContainerStyles({
        overrideStyle: style,
        containerStyle,
        pressedStyle: themedStyle.pressed,
    });
    const buttonTextStyle = useMemo(() => ({
        ...themedStyle.text,
        ...themedStyle[`text${capitalize(variant)}`],
    }), [themedStyle, variant]);
    return (<Pressable {...rest} accessibilityRole={accessibilityRole} disabled={disabled} style={pressableStyle}>
      {typeof children === 'string' ? (<Text style={[buttonTextStyle, textStyle]}>{children}</Text>) : (children)}
    </Pressable>);
}
