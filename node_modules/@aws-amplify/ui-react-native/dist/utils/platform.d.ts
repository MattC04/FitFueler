declare const _default: {
    IS_ANDROID: boolean;
    IS_DEV: boolean;
    IS_IOS: boolean;
    PLATFORM_TOUCH_TARGET: number | undefined;
    constants: import("react-native").PlatformConstants & {
        forceTouchAvailable: boolean;
        interfaceIdiom: string;
        osVersion: string;
        systemName: string;
    };
    OS: "ios";
    isPad: boolean;
    isTV: boolean;
    Version: string;
    isTesting: boolean;
    select<T>(specifics: ({
        ios?: T | undefined;
        android?: T | undefined;
        windows?: T | undefined;
        macos?: T | undefined;
        web?: T | undefined;
        native?: T | undefined;
    } & {
        default: T;
    }) | {
        ios: T;
        android: T;
        windows: T;
        macos: T;
        web: T;
        native: T;
    }): T;
    select<T_1>(specifics: {
        ios?: T_1 | undefined;
        android?: T_1 | undefined;
        windows?: T_1 | undefined;
        macos?: T_1 | undefined;
        web?: T_1 | undefined;
        native?: T_1 | undefined;
    }): T_1 | undefined;
} | {
    IS_ANDROID: boolean;
    IS_DEV: boolean;
    IS_IOS: boolean;
    PLATFORM_TOUCH_TARGET: number | undefined;
    constants: import("react-native").PlatformConstants & {
        Version: number;
        Release: string;
        Serial: string;
        Fingerprint: string;
        Model: string;
        Brand: string;
        Manufacturer: string;
        ServerHost?: string | undefined;
        uiMode: "normal" | "car" | "desk" | "tv" | "watch" | "unknown";
    };
    OS: "android";
    Version: number;
    isTV: boolean;
    isTesting: boolean;
    select<T>(specifics: ({
        ios?: T | undefined;
        android?: T | undefined;
        windows?: T | undefined;
        macos?: T | undefined;
        web?: T | undefined;
        native?: T | undefined;
    } & {
        default: T;
    }) | {
        ios: T;
        android: T;
        windows: T;
        macos: T;
        web: T;
        native: T;
    }): T;
    select<T_1>(specifics: {
        ios?: T_1 | undefined;
        android?: T_1 | undefined;
        windows?: T_1 | undefined;
        macos?: T_1 | undefined;
        web?: T_1 | undefined;
        native?: T_1 | undefined;
    }): T_1 | undefined;
} | {
    IS_ANDROID: boolean;
    IS_DEV: boolean;
    IS_IOS: boolean;
    PLATFORM_TOUCH_TARGET: number | undefined;
    OS: "windows";
    Version: number;
    constants: import("react-native").PlatformConstants & {
        osVersion: number;
    };
    isTV: boolean;
    isTesting: boolean;
    select<T>(specifics: ({
        ios?: T | undefined;
        android?: T | undefined;
        windows?: T | undefined;
        macos?: T | undefined;
        web?: T | undefined;
        native?: T | undefined;
    } & {
        default: T;
    }) | {
        ios: T;
        android: T;
        windows: T;
        macos: T;
        web: T;
        native: T;
    }): T;
    select<T_1>(specifics: {
        ios?: T_1 | undefined;
        android?: T_1 | undefined;
        windows?: T_1 | undefined;
        macos?: T_1 | undefined;
        web?: T_1 | undefined;
        native?: T_1 | undefined;
    }): T_1 | undefined;
} | {
    IS_ANDROID: boolean;
    IS_DEV: boolean;
    IS_IOS: boolean;
    PLATFORM_TOUCH_TARGET: number | undefined;
    OS: "macos";
    Version: string;
    constants: import("react-native").PlatformConstants & {
        osVersion: string;
    };
    isTV: boolean;
    isTesting: boolean;
    select<T>(specifics: ({
        ios?: T | undefined;
        android?: T | undefined;
        windows?: T | undefined;
        macos?: T | undefined;
        web?: T | undefined;
        native?: T | undefined;
    } & {
        default: T;
    }) | {
        ios: T;
        android: T;
        windows: T;
        macos: T;
        web: T;
        native: T;
    }): T;
    select<T_1>(specifics: {
        ios?: T_1 | undefined;
        android?: T_1 | undefined;
        windows?: T_1 | undefined;
        macos?: T_1 | undefined;
        web?: T_1 | undefined;
        native?: T_1 | undefined;
    }): T_1 | undefined;
} | {
    IS_ANDROID: boolean;
    IS_DEV: boolean;
    IS_IOS: boolean;
    PLATFORM_TOUCH_TARGET: number | undefined;
    OS: "web";
    isTV: boolean;
    isTesting: boolean;
    Version: string | number;
    constants: import("react-native").PlatformConstants;
    select<T>(specifics: ({
        ios?: T | undefined;
        android?: T | undefined;
        windows?: T | undefined;
        macos?: T | undefined;
        web?: T | undefined;
        native?: T | undefined;
    } & {
        default: T;
    }) | {
        ios: T;
        android: T;
        windows: T;
        macos: T;
        web: T;
        native: T;
    }): T;
    select<T_1>(specifics: {
        ios?: T_1 | undefined;
        android?: T_1 | undefined;
        windows?: T_1 | undefined;
        macos?: T_1 | undefined;
        web?: T_1 | undefined;
        native?: T_1 | undefined;
    }): T_1 | undefined;
};
export default _default;
