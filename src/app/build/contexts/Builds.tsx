import React, { useCallback, createContext, ReactNode, useState } from 'react'

import { mapBuildDetail, mapBuilds } from 'src/app/build/mappers'
import { Build, BuildDetail, BuildsContextProps } from 'src/app/build/types'
import { data } from 'src/assets/mockups/Builds.json'
import * as fs001 from 'src/assets/mockups/buildDetails/fs001.json'
import * as ipof001 from 'src/assets/mockups/buildDetails/ipof001.json'
import * as low001 from 'src/assets/mockups/buildDetails/low001.json'
import * as ok001 from 'src/assets/mockups/buildDetails/ok001.json'

export const BuildsContext = createContext<Partial<BuildsContextProps>>({})

export const BuildsProvider = ({ children }: { children: ReactNode }) => {
  const [builds] = useState<Build[] | null>(mapBuilds(data))
  const [build, setBuild] = useState<BuildDetail | null>()

  //TODO (R): Remove mockups and change by an endpoint
  const fetchBuildDetail = useCallback((id: string) => {
    switch (id) {
      case 'fs001':
        setBuild(mapBuildDetail(id, fs001))
        break
      case 'ipof001':
        setBuild(mapBuildDetail(id, ipof001))
        break
      case 'low001':
        setBuild(mapBuildDetail(id, low001))
        break
      case 'ok001':
        setBuild(mapBuildDetail(id, ok001))
        break
    }
  }, [])

  const clearBuildDetail = useCallback(() => setBuild(null), [])

  return (
    <BuildsContext.Provider value={{ builds, build, fetchBuildDetail, clearBuildDetail }}>
      {children}
    </BuildsContext.Provider>
  )
}

export default BuildsProvider
