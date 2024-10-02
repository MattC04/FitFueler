import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { isFunction } from '@aws-amplify/ui';
const getDeviceOrientation = () => {
    const { height, width } = Dimensions.get('screen');
    return height >= width ? 'portrait' : 'landscape';
};
export default function useDeviceOrientation() {
    const [deviceOrientation, setDeviceOrientation] = useState(getDeviceOrientation);
    const isLandscapeMode = deviceOrientation === 'landscape';
    const isPortraitMode = deviceOrientation === 'portrait';
    useEffect(() => {
        const handler = () => {
            setDeviceOrientation(getDeviceOrientation);
        };
        // The below cast and conditional unsubscribe handling is due to subscription removal variation
        // between `Dimensions.addEventListener` in React Native prior to and after v0.65.
        //
        // Beginning with v0.65, `Dimensions.addEventListener` returns an `EventSubscription` object,
        // which includes a `remove` method for removing the subscription. Prior versions return
        // `undefined`, and subscription removal is handled by `Dimensions.removeEventListener`,
        // which is deprecated in v0.65
        const subscription = Dimensions.addEventListener('change', handler);
        return () => {
            if (isFunction(subscription?.remove)) {
                subscription.remove();
            }
            else {
                Dimensions.removeEventListener('change', handler);
            }
        };
    }, []);
    return { deviceOrientation, isLandscapeMode, isPortraitMode };
}
