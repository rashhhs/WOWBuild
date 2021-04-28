import { render, fireEvent } from '@testing-library/react-native'
import React from 'react'

import { mockUseContext } from '../../__mocks__/MockBuildsContext'
import {
  mockHook,
  MOCK_REACT_NAVIGATION_USE_ROUTE,
  MOCK_SAFE_AREA_VIEW,
} from '../../__mocks__/utils'

import BuildDetail from 'src/app/build/screens/BuildDetail'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}))

jest.mock('react-native-keyboard-spacer', () => '')

jest.mock('react-native-localize', () => {
  return require('../../react-native-localize')
})

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: mockHook(MOCK_SAFE_AREA_VIEW),
}))

jest.mock('@react-navigation/native', () => ({
  useRoute: mockHook(MOCK_REACT_NAVIGATION_USE_ROUTE),
  useNavigation: mockHook({ goBack: () => {} }),
}))

jest.mock('src/app/core/navigation/utils', () => ({
  useTabs: mockHook({
    showTabs: () => {},
  }),
  navigate: () => {},
}))

React.useContext = mockUseContext

/*
  1. Fragments clickable if has extra content
  2. TODO: Fragments not clickable if hasn't extra content
*/
describe('Build Detail', () => {
  it('Fragments clickable', () => {
    const { getByTestId } = render(<BuildDetail />)

    const widgetMechanics = getByTestId('build-detail-mechanics-widget')
    fireEvent.press(widgetMechanics)
  })
})
