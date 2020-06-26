import fdk from '@fnproject/fdk'

// tslint:disable-next-line:class-name
interface fnHttpGateway {
  setResponseHeader: (key: string, value: string) => void
  method: string
  statusCode: number
}
// tslint:disable-next-line:class-name
interface fnContext {
  httpGateway: fnHttpGateway
}

export const DEFAULT_CORS_ORIGIN = '*'

export class FdkUtil {
  public static setCors(ctx: fnContext, origin?: string) {
    if (!origin) {
      origin = DEFAULT_CORS_ORIGIN
    }
    const hctx = ctx.httpGateway
    hctx.setResponseHeader('Access-Control-Allow-Origin', origin)
    hctx.setResponseHeader('Access-Control-Allow-Credentials', 'true')
    hctx.setResponseHeader(
      'Access-Control-Allow-Headers',
      'x-requested-with, Content-Type, x-request-uv, Authorization'
    )
    hctx.setResponseHeader(
      'Access-Control-Allow-Methods',
      'POST, PUT, GET, DELETE, OPTIONS'
    )
  }

  public static setCorsByReferer(ctx: fnContext) {
    // TODO
    return this.setCors(ctx)
  }

  public static setResponse(ctx: fnContext, resText: string, resCode: number) {
    ctx.httpGateway.statusCode = resCode
    return fdk.rawResult(resText)
  }

  public static get methodType() {
    return {
      isOption: (ctx: fnContext) => this.checkMethod(ctx, 'OPTIONS'),
      isGET: (ctx: fnContext) => this.checkMethod(ctx, 'GET'),
      isPOST: (ctx: fnContext) => this.checkMethod(ctx, 'POST'),
      isPUT: (ctx: fnContext) => this.checkMethod(ctx, 'PUT'),
      isDELETE: (ctx: fnContext) => this.checkMethod(ctx, 'DELETE')
    }
  }

  public static checkMethod(ctx: fnContext, method: string) {
    return ctx.httpGateway.method === method.toUpperCase()
  }
}
