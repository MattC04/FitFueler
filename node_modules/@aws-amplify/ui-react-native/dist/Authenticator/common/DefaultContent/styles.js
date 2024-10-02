import { StyleSheet } from 'react-native';
export const getDefaultStyle = ({ tokens: { colors, fontSizes, space }, }) => StyleSheet.create({
    body: {
        fontSize: fontSizes.medium,
        paddingHorizontal: space.small,
    },
    buttonPrimary: {
        margin: space.small,
    },
    buttonPrimaryLabel: {},
    buttonSecondary: {
        marginHorizontal: space.medium,
    },
    buttonSecondaryLabel: {},
    errorMessage: {
        marginHorizontal: space.small,
    },
    errorMessageIcon: {},
    errorMessageLabel: {},
    fieldContainer: {
        paddingHorizontal: space.small,
    },
    fieldErrorsContainer: {
        paddingHorizontal: space.medium,
        paddingVertical: space.xs,
    },
    fieldError: {
        color: colors.font.error,
        paddingVertical: 1,
    },
    fieldLabel: {},
    fieldStyle: {},
    footer: {},
    formFields: {
        paddingBottom: space.xs,
    },
    header: {
        marginVertical: space.small,
        paddingHorizontal: space.small,
    },
    link: {
        marginVertical: space.xs,
        minWidth: '50%',
    },
    linksContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});
