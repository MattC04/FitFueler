export interface RTNCore {
    computeModPow(payload: {
        base: string;
        exponent: string;
        divisor: string;
    }): Promise<string>;
    computeS(payload: {
        g: string;
        x: string;
        k: string;
        a: string;
        b: string;
        u: string;
    }): Promise<string>;
    getDeviceName(): Promise<string>;
}
