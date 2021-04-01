import React, { createContext, ReactNode, useState } from 'react'

import { mapBuilds } from 'src/app/build/mappers'
import { Build, BuildsContextProps } from 'src/app/build/types'
import { data } from 'src/assets/mockups/Builds.json'

export const BuildsContext = createContext<Partial<BuildsContextProps>>({})

export const BuildsProvider = ({ children }: { children: ReactNode }) => {
  const [builds] = useState<Build[] | null>(mapBuilds(data))

  return <BuildsContext.Provider value={{ builds }}>{children}</BuildsContext.Provider>
}

export default BuildsProvider
