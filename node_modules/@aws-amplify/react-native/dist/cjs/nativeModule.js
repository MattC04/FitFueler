'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.nativeModule = void 0;
const react_native_1 = require("react-native");
const LINKING_ERROR = `The package '@aws-amplify/react-native' doesn't seem to be linked. Make sure: \n\n` +
    react_native_1.Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo Go\n';
exports.nativeModule = react_native_1.NativeModules.AmplifyRTNCore
    ? react_native_1.NativeModules.AmplifyRTNCore
    : new Proxy({}, {
        get() {
            throw new Error(LINKING_ERROR);
        },
    });
//# sourceMappingURL=nativeModule.js.map
