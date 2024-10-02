import { StyleSheet } from 'react-native';
export const getThemedStyles = (theme) => {
    const { space } = theme.tokens;
    return StyleSheet.create({
        button: {
            marginVertical: space.xs,
        },
        dividerLabel: {
            textAlign: 'center',
        },
        container: {
            marginHorizontal: space.small,
        },
    });
};
