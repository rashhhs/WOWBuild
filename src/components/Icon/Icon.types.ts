import type { ViewStyle } from 'react-native'

import type Color from 'src/utils/Colors'

export type IconProps = {
  height?: number
  style?: ViewStyle
  width?: number
}

export type NonColorableIconProps = IconProps

export type ColorableIconProps = IconProps & {
  color?: Color
}
