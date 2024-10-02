import { useCallback } from 'react';
import { isFunction } from '@aws-amplify/ui';
export const usePressableContainerStyles = ({ overrideStyle, containerStyle, pressedStyle, }) => {
    return useCallback(({ pressed }) => {
        const pressedOverrideStyle = isFunction(overrideStyle)
            ? overrideStyle({ pressed })
            : overrideStyle;
        return [
            containerStyle,
            pressed ? pressedStyle : undefined,
            // include last to override other styles
            pressedOverrideStyle,
        ];
    }, [containerStyle, overrideStyle, pressedStyle]);
};
