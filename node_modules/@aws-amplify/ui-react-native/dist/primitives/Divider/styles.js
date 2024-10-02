import { StyleSheet } from 'react-native';
export const getThemedStyles = (theme) => {
    const { tokens, components } = theme;
    const { colors, fontSizes, space, borderWidths } = tokens;
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            flexDirection: 'row',
            ...components?.divider?.container,
        },
        label: {
            fontSize: fontSizes.medium,
            margin: space.medium,
            textAlign: 'center',
            color: colors.font.tertiary,
            ...components?.divider?.label,
        },
        line: {
            backgroundColor: colors.border.secondary,
            flex: 1,
            height: borderWidths.small,
            ...components?.divider?.line,
        },
    });
};
