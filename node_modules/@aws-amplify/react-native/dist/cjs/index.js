'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAppState = exports.loadBase64 = exports.loadGetRandomValues = exports.loadUrlPolyfill = exports.loadBuffer = exports.loadNetInfo = exports.loadAsyncStorage = exports.loadAmplifyWebBrowser = exports.loadAmplifyPushNotification = exports.getDeviceName = exports.getOperatingSystem = exports.computeS = exports.computeModPow = void 0;
var apis_1 = require("./apis");
Object.defineProperty(exports, "computeModPow", { enumerable: true, get: function () { return apis_1.computeModPow; } });
Object.defineProperty(exports, "computeS", { enumerable: true, get: function () { return apis_1.computeS; } });
Object.defineProperty(exports, "getOperatingSystem", { enumerable: true, get: function () { return apis_1.getOperatingSystem; } });
Object.defineProperty(exports, "getDeviceName", { enumerable: true, get: function () { return apis_1.getDeviceName; } });
var moduleLoaders_1 = require("./moduleLoaders");
Object.defineProperty(exports, "loadAmplifyPushNotification", { enumerable: true, get: function () { return moduleLoaders_1.loadAmplifyPushNotification; } });
Object.defineProperty(exports, "loadAmplifyWebBrowser", { enumerable: true, get: function () { return moduleLoaders_1.loadAmplifyWebBrowser; } });
Object.defineProperty(exports, "loadAsyncStorage", { enumerable: true, get: function () { return moduleLoaders_1.loadAsyncStorage; } });
Object.defineProperty(exports, "loadNetInfo", { enumerable: true, get: function () { return moduleLoaders_1.loadNetInfo; } });
Object.defineProperty(exports, "loadBuffer", { enumerable: true, get: function () { return moduleLoaders_1.loadBuffer; } });
Object.defineProperty(exports, "loadUrlPolyfill", { enumerable: true, get: function () { return moduleLoaders_1.loadUrlPolyfill; } });
Object.defineProperty(exports, "loadGetRandomValues", { enumerable: true, get: function () { return moduleLoaders_1.loadGetRandomValues; } });
Object.defineProperty(exports, "loadBase64", { enumerable: true, get: function () { return moduleLoaders_1.loadBase64; } });
Object.defineProperty(exports, "loadAppState", { enumerable: true, get: function () { return moduleLoaders_1.loadAppState; } });
//# sourceMappingURL=index.js.map
