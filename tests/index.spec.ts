import { FdkUtil } from '../src/index'

function buildCtx() {
  return {
    httpGateway: {
      method: 'POST',
      statusCode: 200,
      setResponseHandler: (key: string, value: string) => {
        return `${key}${value}`
      }
    }
  } as any
}
test('methodCheck', () => {
  const ctx = buildCtx()
  ctx.httpGateway.method = 'DELETE'
  const result = FdkUtil.methodType.isDELETE(ctx)
  expect(result).toBeTruthy()
})
