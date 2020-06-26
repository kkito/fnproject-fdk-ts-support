declare module "@fnproject/fdk" {
  interface handlerCallback {
    (content: string | any, option: fnContext): void;
  }
  interface fnHttpGateway {
    setResponseHeader: (key: string, value: string) => void;
    method: string;
    statusCode: number;
  }
  interface fnContext {
    httpGateway: fnHttpGateway;
  }
  interface IFdk {
    handle: (red: handlerCallback) => void;
    rawResult: (content: string) => any;
    // handle((ctx:any, xx:any): Promise<any>): any
  }
  const fdk: IFdk;
  export = fdk;
}
