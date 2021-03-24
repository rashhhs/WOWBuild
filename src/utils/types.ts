export type PropsWithTypedChildren<T, C> = T & { children: C }

export type WithTestID<T = {}> = T & { testID?: string }

export type VoidFunction = () => void
