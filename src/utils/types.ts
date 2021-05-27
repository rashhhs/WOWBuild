import { ExtraContent, Fragment } from 'src/app/build/types'

export type Generic<T = any, K = string> = {
  // @ts-ignore
  [key in K]: T
}

export type PropsWithTypedChildren<T, C> = T & { children: C }

export type WithTestID<T = {}> = T & { testID?: string }

export type VoidFunction = () => void

export type VisibleToggle = {
  open: VoidFunction
  close: VoidFunction
}

export type Point = {
  x: number
  y: number
}

export type Size = {
  width: number
  height: number
}

export type Timestamp = number

export type RootStackParamList = {
  BuildDetail: { id: string }
  BuildFragment: { title: string; fragment?: Fragment; contents?: ExtraContent[] }
}
