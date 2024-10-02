import { StyleSheet } from 'react-native';
export const getThemedStyles = ({ tokens: { colors } }, insetPadding) => {
    return StyleSheet.create({
        keyboardAvoidingView: {
            alignContent: 'center',
            backgroundColor: colors.background.primary,
            justifyContent: 'center',
            flex: 1,
            // TDOO: add theme override
        },
        scrollViewContentContainer: {
            ...insetPadding,
            alignContent: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            // TDOO: add theme override
        },
        scrollView: {}, // TDOO: add theme override
    });
};
export const getInnerContainerStyles = ({ tokens: { space }, }) => StyleSheet.create({
    container: {
        marginHorizontal: space.medium,
        // TDOO: add theme override
    },
});
