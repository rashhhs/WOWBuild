import type { IconName, Transform } from '@fortawesome/fontawesome-svg-core'
import type { ViewStyle } from 'react-native'
import { GestureResponderEvent } from 'react-native'

import type Color from 'src/utils/Colors'
import type { WithTestID } from 'src/utils/types'

export enum AwesomeIconVariant {
  Brand = 'fab',
  Duotone = 'fad',
  Light = 'fal',
  Regular = 'far',
  Solid = 'fas',
}

export enum AwesomeIconSize {
  Micro = 10,
  ExtraExtraSmall = 12,
  ExtraSmall = 16,
  Small = 20,
  Medium = 24,
  Large = 32,
  ExtraLarge = 48,
}

export type AwesomeIconProps = WithTestID<{
  variant?: AwesomeIconVariant
  containerStyle?: ViewStyle
  icon: IconName
  color?: Color
  size?: AwesomeIconSize
  style?: ViewStyle
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  rotate?: boolean
  rotateDuration?: number
  rotateOrientation?: 'ltr' | 'rtl'
  transform?: Transform
}>

export type { IconName, Transform }
