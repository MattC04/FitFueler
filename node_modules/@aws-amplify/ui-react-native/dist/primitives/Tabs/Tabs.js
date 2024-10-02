import React, { Children, cloneElement, isValidElement } from 'react';
import { View } from 'react-native';
import { useTheme } from '../../theme';
import { getThemedStyles } from './styles';
export default function Tabs({ accessible = true, accessibilityRole = 'tablist', children, indicatorPosition = 'bottom', onChange, selectedIndex = 0, style, ...rest }) {
    const theme = useTheme();
    const themedStyle = getThemedStyles(theme, indicatorPosition);
    const handleOnChange = (nextIndex) => {
        onChange?.(nextIndex);
    };
    return (<View {...rest} accessible={accessible} accessibilityRole={accessibilityRole} style={[themedStyle.tabList, style]}>
      {Children.map(children, (child, index) => {
            if (isValidElement(child)) {
                return cloneElement(child, {
                    onPress: (event) => {
                        child.props.onPress?.(event);
                        handleOnChange(index);
                    },
                    indicatorPosition,
                    selected: index === selectedIndex,
                });
            }
        })}
    </View>);
}
