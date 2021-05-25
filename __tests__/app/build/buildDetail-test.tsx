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

const mockedNavigate = jest.fn(() => {
  console.log('CALLED')
})
jest.mock('src/app/core/navigation/utils', () => ({
  useTabs: mockHook({
    showTabs: () => {},
  }),
  navigate: () => mockedNavigate(),
}))

React.useContext = mockUseContext

/*
  1. Fragments clickable if has extra content
  2. TODO: Fragments not clickable if hasn't extra content
*/
describe('Build Detail', () => {
  it('Fragments with content should be clickable', () => {
    const { getByTestId } = render(<BuildDetail />)

    const widgetSkills = getByTestId('build-detail-skills-widget')

    fireEvent.press(widgetSkills)
    expect(mockedNavigate).toHaveBeenCalledTimes(1)
  })
  //TODO: The chevron icon (AwesomeIcon) would be nice to check if there exists or not. But to be able test. Probably, it should be necessary to spread the render
  it('Fragment without content should not be clickable ', () => {
    const { getByTestId } = render(<BuildDetail />)

    const widgetMechanics = getByTestId('build-detail-mechanics-widget')
    fireEvent.press(widgetMechanics)
    expect(mockedNavigate).toHaveBeenCalledTimes(1)
  })
  //TODO: Null safe and return a simple text as a row if not exist
  it('Hide spell if its not on the database', () => {})
})
