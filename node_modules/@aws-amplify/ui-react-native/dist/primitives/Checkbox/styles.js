import { StyleSheet } from 'react-native';
import { getFlexDirectionFromLabelPosition } from '../Label/utils';
export const getThemedStyles = (theme, labelPosition) => {
    const { tokens, components } = theme;
    const { opacities, space } = tokens;
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            padding: space.xs,
            flexDirection: getFlexDirectionFromLabelPosition(labelPosition),
            ...components?.checkbox?.container,
        },
        disabled: {
            opacity: opacities[60],
            ...components?.checkbox?.disabled,
        },
        icon: {
            ...components?.checkbox?.icon,
        },
        label: {
            ...components?.checkbox?.label,
        },
    });
};
