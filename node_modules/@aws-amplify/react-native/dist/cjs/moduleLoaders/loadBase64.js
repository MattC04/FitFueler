'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBase64 = void 0;
const base_64_1 = require("base-64");
const loadBase64 = () => ({ decode: base_64_1.decode, encode: base_64_1.encode });
exports.loadBase64 = loadBase64;
//# sourceMappingURL=loadBase64.js.map
