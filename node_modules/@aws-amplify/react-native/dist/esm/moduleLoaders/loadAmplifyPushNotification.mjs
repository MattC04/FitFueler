// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const loadAmplifyPushNotification = () => {
    try {
        // metro bundler requires static string for loading module.
        // See: https://facebook.github.io/metro/docs/configuration/#dynamicdepsinpackages
        const module = require('@aws-amplify/rtn-push-notification')?.module;
        if (module) {
            return module;
        }
        throw new Error('Ensure `@aws-amplify/rtn-push-notification` is installed and linked.');
    }
    catch (e) {
        // The error parsing logic cannot be extracted with metro as the `require`
        // would be confused when there is a `import` in the same file importing
        // another module and that causes an error
        const message = e.message.replace(/undefined/g, '@aws-amplify/rtn-push-notification');
        throw new Error(message);
    }
};

export { loadAmplifyPushNotification };
//# sourceMappingURL=loadAmplifyPushNotification.mjs.map
