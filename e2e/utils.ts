/* eslint-env detox/detox, mocha */

export const expectToBeVisible = async (matcher: Detox.Matchers) => {
  // @ts-ignore
  return expect(element(matcher)).toBeVisible()
}
