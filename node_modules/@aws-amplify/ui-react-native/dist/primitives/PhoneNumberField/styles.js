import { StyleSheet } from 'react-native';
export const getThemedStyles = (theme) => {
    const { components } = theme;
    return StyleSheet.create({
        container: {
            ...components?.phoneNumberField?.container,
        },
        fieldContainer: {
            ...components?.phoneNumberField?.fieldContainer,
        },
        field: {
            ...components?.phoneNumberField?.field,
        },
        label: {
            ...components?.phoneNumberField?.label,
        },
    });
};
