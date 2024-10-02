import React from 'react';
import { Heading } from '../../../primitives/Heading';
export default function DefaultHeader({ children, level = 3, ...rest }) {
    return children ? (<Heading {...rest} level={level}>
      {children}
    </Heading>) : null;
}
