import { Platform, NativeModules } from 'react-native';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const LINKING_ERROR = `The package '@aws-amplify/react-native' doesn't seem to be linked. Make sure: \n\n` +
    Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo Go\n';
const nativeModule = NativeModules.AmplifyRTNCore
    ? NativeModules.AmplifyRTNCore
    : new Proxy({}, {
        get() {
            throw new Error(LINKING_ERROR);
        },
    });

export { nativeModule };
//# sourceMappingURL=nativeModule.mjs.map
