import React from 'react';
import { Button, Icon, Label } from '../../../primitives';
import { usePressableContainerStyles } from '../../../hooks';
export default function FederatedProviderButton({ children, source, style, textStyle, ...rest }) {
    const pressableStyle = usePressableContainerStyles({
        overrideStyle: style,
    });
    return (<Button {...rest} style={pressableStyle}>
      <Icon source={source} size={20}/>
      <Label style={textStyle}>{children}</Label>
    </Button>);
}
