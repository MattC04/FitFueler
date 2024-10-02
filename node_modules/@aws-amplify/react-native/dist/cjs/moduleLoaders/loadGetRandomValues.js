'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadGetRandomValues = void 0;
const loadGetRandomValues = () => {
    try {
        // metro bundler requires static string for loading module.
        // See: https://facebook.github.io/metro/docs/configuration/#dynamicdepsinpackages
        require('react-native-get-random-values');
    }
    catch (e) {
        // The error parsing logic cannot be extract as with metro the `require`
        // would be confused when there is a `import` in the same file importing
        // another module and that causes error
        const message = e.message.replace(/undefined/g, 'react-native-get-random-values');
        throw new Error(message);
    }
};
exports.loadGetRandomValues = loadGetRandomValues;
//# sourceMappingURL=loadGetRandomValues.js.map
