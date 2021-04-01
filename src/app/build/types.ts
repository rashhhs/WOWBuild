import { Timestamp } from 'src/utils/types'

export type BackendBuild = {
  id: string
  name: string
  lastUpdate: Timestamp
  expansion: string
  spec: string
}

export type Build = {
  id: string
  name: string
  lastUpdate: Timestamp
  expansion: string
  expansionImage: string
  spec: string
  specImage: string
}

export type BuildsContextProps = {
  builds: Build[] | null
}
