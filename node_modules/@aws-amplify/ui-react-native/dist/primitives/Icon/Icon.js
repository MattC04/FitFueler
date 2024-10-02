import React, { useMemo } from 'react';
import { Animated, Image } from 'react-native';
import { useTheme } from '../../theme';
import { getThemedStyles } from './styles';
export default function Icon({ accessible = true, accessibilityRole = 'image', animated, color, size, style, ...rest }) {
    const theme = useTheme();
    const themedStyle = useMemo(() => getThemedStyles(theme, color, size), [theme, color, size]);
    const imageProps = {
        ...rest,
        accessible,
        accessibilityRole,
        style: [themedStyle.icon, style],
    };
    if (animated) {
        return <Animated.Image {...imageProps}/>;
    }
    return <Image {...imageProps}/>;
}
