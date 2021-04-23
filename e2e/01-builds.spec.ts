import { device, element, by, waitFor } from 'detox'

import { expectToBeVisible } from './utils'

describe('Builds Testing Case', () => {
  it('Pre installs', async () => {
    await device.reloadReactNative()
  })
  it('Build List', async () => {
    await element(by.id('build-list-item-1')).tap()
    await expectToBeVisible(by.id('build-detail-layout'))
  })
  it('Build Details', async () => {
    waitFor(element(by.id('build-detail-mechanics-widget'))).toBeVisible()
    await element(by.id('build-detail-mechanics-widget')).tap()
    await expectToBeVisible(by.id('build-fragment-layout'))
  })
  it('Return to the Build List', async () => {
    await element(by.id('build-fragment-layout-back-button')).tap()
    await element(by.id('build-detail-layout-back-button')).tap()
    await expectToBeVisible(by.id('build-list-layout'))
  })
})
