import { useContext } from 'react'

import { BuildsContext } from 'src/app/build/contexts/Builds'

export const useBuild = () => useContext(BuildsContext)

export const useBuilds = () => {
  const { builds } = useBuild()

  return builds
}
