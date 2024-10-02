'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadUrlPolyfill = void 0;
const loadUrlPolyfill = () => {
    try {
        // metro bundler requires static string for loading module.
        // See: https://facebook.github.io/metro/docs/configuration/#dynamicdepsinpackages
        require('react-native-url-polyfill/auto');
    }
    catch (e) {
        // The error parsing logic cannot be extract as with metro the `require`
        // would be confused when there is a `import` in the same file importing
        // another module and that causes error
        const message = e.message.replace(/undefined/g, 'react-native-url-polyfill');
        throw new Error(message);
    }
};
exports.loadUrlPolyfill = loadUrlPolyfill;
//# sourceMappingURL=loadUrlPolyfill.js.map
