/* eslint-env detox/detox, mocha */
import { expect } from 'detox'

export const expectToBeVisible = async (matcher: Detox.NativeMatcher) => {
  return expect(element(matcher)).toBeVisible()
}
