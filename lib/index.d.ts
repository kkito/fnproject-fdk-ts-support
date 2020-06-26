interface fnHttpGateway {
    setResponseHeader: (key: string, value: string) => void;
    method: string;
    statusCode: number;
}
interface fnContext {
    httpGateway: fnHttpGateway;
}
export declare const DEFAULT_CORS_ORIGIN = "*";
export declare class FdkUtil {
    static setCors(ctx: fnContext, origin?: string): void;
    static setCorsByReferer(ctx: fnContext): void;
    static setResponse(ctx: fnContext, resText: string, resCode: number): any;
    static get methodType(): {
        isOption: (ctx: fnContext) => boolean;
        isGET: (ctx: fnContext) => boolean;
        isPOST: (ctx: fnContext) => boolean;
        isPUT: (ctx: fnContext) => boolean;
        isDELETE: (ctx: fnContext) => boolean;
    };
    static checkMethod(ctx: fnContext, method: string): boolean;
}
export {};
