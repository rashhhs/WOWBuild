import React, { ReactNode } from 'react'

import * as buildDetail from '../__assets__/detail.json'

import { mockHook } from './utils'

import { BuildsContext } from 'src/app/build/contexts/Builds'
import * as icecap from 'src/assets/mockups/Spells/icecap.json'

const BuildContextProvider = ({ children }: { children: ReactNode }) => (
  <BuildsContext.Provider value={{}}>{children}</BuildsContext.Provider>
)

const wrapper = ({ children }: { children: ReactNode }) => (
  <BuildContextProvider>{children}</BuildContextProvider>
)

const mockFetchBuildDetail = mockHook({})

const mockClearBuildDetail = mockHook({})

export const mockUseContext = jest.fn().mockImplementation(() => ({
  builds: [],
  build: buildDetail,
  fetchBuildDetail: mockFetchBuildDetail,
  clearBuildDetail: mockClearBuildDetail,
  spells: [{ icecap: icecap }],
}))
