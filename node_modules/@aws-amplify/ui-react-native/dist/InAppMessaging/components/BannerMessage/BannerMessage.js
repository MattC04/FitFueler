import React from 'react';
import { useMessageProps } from '../../hooks';
import { MessageWrapper } from '../MessageWrapper';
import { MessageLayout } from '../MessageLayout';
import { getStyles, positionStyle } from './styles';
export default function BannerMessage({ position = 'top', ...props }) {
    const messageProps = useMessageProps(props, (imageDimensions) => getStyles(imageDimensions, { position: { ...positionStyle[position] } }));
    const { shouldRenderMessage, styles } = messageProps;
    if (!shouldRenderMessage) {
        return null;
    }
    const { wrapper, ...messageStyles } = styles;
    return (<MessageWrapper style={wrapper}>
      <MessageLayout {...props} {...messageProps} orientation="landscape" styles={messageStyles} testID={`inappmessaging-${position}banner-dialog`}/>
    </MessageWrapper>);
}
