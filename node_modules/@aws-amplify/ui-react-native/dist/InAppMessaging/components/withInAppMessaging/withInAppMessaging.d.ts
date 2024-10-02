import React from 'react';
import { MessageComponents } from '../InAppMessageDisplay';
export default function withInAppMessaging<Props = {}>(Component: React.ComponentType<Props>, options?: {
    components?: MessageComponents;
}): (props: Props) => JSX.Element;
