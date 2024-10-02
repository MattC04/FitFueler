import { StyleSheet } from 'react-native';
export const getThemedStyles = ({ components, tokens: { colors }, }) => {
    return StyleSheet.create({
        container: {
            ...components?.passwordField?.container,
        },
        icon: {
            // match to `TextField` placeholder color
            tintColor: colors.font.tertiary,
            ...components?.passwordField?.icon,
        },
    });
};
