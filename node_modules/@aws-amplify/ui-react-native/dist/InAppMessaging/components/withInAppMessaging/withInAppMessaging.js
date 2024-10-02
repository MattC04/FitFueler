import React from 'react';
import { InAppMessagingProvider } from '@aws-amplify/ui-react-core-notifications';
import { InAppMessageDisplay } from '../InAppMessageDisplay';
export default function withInAppMessaging(Component, options) {
    return function WrappedWithInAppMessaging(props) {
        return (<InAppMessagingProvider>
        <InAppMessageDisplay {...options}/>
        <Component {...props}/>
      </InAppMessagingProvider>);
    };
}
