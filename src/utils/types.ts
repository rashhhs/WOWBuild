export type Generic<T = any, K = string> = {
  // @ts-ignore
  [key in K]: T
}

export type PropsWithTypedChildren<T, C> = T & { children: C }

export type WithTestID<T = {}> = T & { testID?: string }

export type VoidFunction = () => void

export type Timestamp = number

export type RootStackParamList = {
  BuildDetail: { id: string }
  BuildFragment: { title: string; fragment: Generic }
}
