import { StyleSheet } from 'react-native';
export const getThemedStyles = (theme) => {
    const { components } = theme;
    return StyleSheet.create({
        container: {
            ...components?.radioGroup?.container,
        },
        label: {
            /**
             * The RadioGroup label inherits its styles from the Label primitive,
             * and also supports customization via a Theme.
             */
            ...components?.radioGroup?.label,
        },
    });
};
