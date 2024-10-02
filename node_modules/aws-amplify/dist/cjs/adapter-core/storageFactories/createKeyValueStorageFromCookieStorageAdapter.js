'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKeyValueStorageFromCookieStorageAdapter = exports.defaultSetCookieOptions = void 0;
exports.defaultSetCookieOptions = {
    // TODO: allow configure with a public interface
    sameSite: 'lax',
    secure: true,
    path: '/',
};
const ONE_YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;
/**
 * Creates a Key Value storage interface using the `cookieStorageAdapter` as the
 * underlying storage.
 * @param cookieStorageAdapter An implementation of the `Adapter` in {@link CookieStorage}.
 * @returns An object that implements {@link KeyValueStorageInterface}.
 */
const createKeyValueStorageFromCookieStorageAdapter = (cookieStorageAdapter, validatorMap) => {
    return {
        setItem(key, value) {
            // Delete the cookie item first then set it. This results:
            // SetCookie: key=;expires=1970-01-01;(path='current-path') <- remove path'ed cookies
            // SetCookie: key=value;expires=Date.now() + 365 days;path=/;secure=true
            cookieStorageAdapter.delete(key);
            // TODO(HuiSF): follow up the default CookieSerializeOptions values
            cookieStorageAdapter.set(key, value, {
                ...exports.defaultSetCookieOptions,
                expires: new Date(Date.now() + ONE_YEAR_IN_MS),
            });
            return Promise.resolve();
        },
        async getItem(key) {
            const cookie = cookieStorageAdapter.get(key);
            const value = cookie?.value ?? null;
            if (value && validatorMap?.getItem) {
                const isValid = await validatorMap.getItem(key, value);
                if (!isValid)
                    return null;
            }
            return value;
        },
        removeItem(key) {
            cookieStorageAdapter.delete(key);
            return Promise.resolve();
        },
        clear() {
            // TODO(HuiSF): follow up the implementation.
            throw new Error('This method has not implemented.');
        },
    };
};
exports.createKeyValueStorageFromCookieStorageAdapter = createKeyValueStorageFromCookieStorageAdapter;
//# sourceMappingURL=createKeyValueStorageFromCookieStorageAdapter.js.map
