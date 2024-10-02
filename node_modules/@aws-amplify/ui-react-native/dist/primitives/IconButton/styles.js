import { StyleSheet } from 'react-native';
export const getThemedStyles = (theme) => {
    const { components, tokens: { opacities }, } = theme;
    return StyleSheet.create({
        container: {
            ...components?.iconButton?.container,
        },
        disabled: {
            opacity: opacities[60],
            ...components?.iconButton?.disabled,
        },
        pressed: {
            opacity: opacities[60],
            ...components?.iconButton?.pressed,
        },
    });
};
