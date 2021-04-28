import React, { ReactNode } from 'react'

import { mockHook } from './utils'

import { BuildsContext } from 'src/app/build/contexts/Builds'
import * as low001 from 'src/assets/mockups/buildDetails/low001.json'

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
  build: low001,
  fetchBuildDetail: mockFetchBuildDetail,
  clearBuildDetail: mockClearBuildDetail,
}))
