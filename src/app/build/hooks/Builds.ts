import { useContext } from 'react'

import { BuildsContext } from 'src/app/build/contexts/Builds'

export const useBuild = () => useContext(BuildsContext)

export const useBuilds = () => {
  const { builds } = useBuild()

  return builds
}

export const useBuildDetail = () => {
  const { build } = useBuild()

  return build
}

export const useBuildActions = () => {
  const { fetchBuildDetail, clearBuildDetail } = useBuild()

  return { fetchBuildDetail, clearBuildDetail }
}
