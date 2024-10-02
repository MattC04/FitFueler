import React, { Children, cloneElement, isValidElement, useCallback, useEffect, useMemo, useState, } from 'react';
import { View } from 'react-native';
import { useHasValueUpdated } from '@aws-amplify/ui-react-core';
import { useTheme } from '../../theme';
import { Label } from '../Label';
import { getFlexDirectionFromLabelPosition } from '../Label/utils';
import { getThemedStyles } from './styles';
export default function RadioGroup({ accessible = true, accessibilityRole = 'radiogroup', children, direction = 'vertical', disabled, initialValue, label, labelPosition = 'top', labelStyle, onChange, onValueChange, size, style, ...rest }) {
    const theme = useTheme();
    const themedStyle = getThemedStyles(theme);
    const [value, setValue] = useState(initialValue);
    // track `hasValueUpdated` and `hasOnValueChangeUpdated`,
    // only call `onValueChange` on `value` update
    const hasValueUpdated = useHasValueUpdated(value);
    const hasOnValueChangeUpdated = useHasValueUpdated(onValueChange);
    useEffect(() => {
        if (hasValueUpdated) {
            onValueChange?.(value);
        }
    }, [hasOnValueChangeUpdated, hasValueUpdated, onValueChange, value]);
    const containerStyle = useMemo(() => ({
        flexDirection: getFlexDirectionFromLabelPosition(labelPosition),
    }), [labelPosition]);
    const childContainerStyle = useMemo(() => ({ flexDirection: direction === 'horizontal' ? 'row' : 'column' }), [direction]);
    const handleChange = useCallback((nextValue) => {
        setValue(nextValue);
        onChange?.(nextValue);
    }, [onChange]);
    return (<View {...rest} style={[themedStyle.container, containerStyle, style]}>
      <View accessible={accessible} accessibilityRole={accessibilityRole} style={childContainerStyle}>
        {Children.map(children, (child) => {
            if (isValidElement(child)) {
                const { disabled: childDisabled, onChange: childOnChange, value: childValue, size: childSize, } = child.props;
                const isChildDisabled = typeof childDisabled === 'boolean' ? childDisabled : disabled;
                const isChildSelected = childValue === value;
                return cloneElement(child, {
                    ...child.props,
                    disabled: isChildDisabled,
                    onChange: (nextValue) => {
                        childOnChange?.(nextValue);
                        handleChange(nextValue);
                    },
                    selected: isChildSelected,
                    size: childSize ?? size,
                });
            }
        })}
      </View>
      {label ? (<Label style={[themedStyle.label, labelStyle]}>{label}</Label>) : null}
    </View>);
}
