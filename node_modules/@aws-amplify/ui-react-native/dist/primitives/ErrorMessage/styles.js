import { StyleSheet } from 'react-native';
export const getThemedStyles = (theme) => {
    const { tokens: { colors, fontSizes, space }, components, } = theme;
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            backgroundColor: colors.background.error,
            flexDirection: 'row',
            paddingHorizontal: space.xs,
            paddingVertical: space.small,
            ...components?.errorMessage?.container,
        },
        icon: {
            margin: space.xs,
            tintColor: colors.font.error,
            ...components?.errorMessage?.icon,
        },
        label: {
            color: colors.font.error,
            flex: 1,
            fontSize: fontSizes.medium,
            paddingHorizontal: space.xs,
            ...components?.errorMessage?.label,
        },
    });
};
