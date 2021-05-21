import C, { boxShadow, classNames, extend, apply, theme } from 'consistencss'
import { Easing } from 'react-native'

import Color from './Colors'

export enum FontFamily {
  BLACK = 'Roboto-Black',
  LIGHT = 'Roboto-Light',
  REGULAR = 'Roboto-Regular',
  MEDIUM = 'Roboto-Medium',
  BOLD = 'Roboto-Bold',
}

extend({
  classes: {
    letterzero: apply({ letterSpacing: 0 }),
    lettertwo: apply({ letterSpacing: 0.2 }),
    letterfour: apply({ letterSpacing: 0.4 }),
    grow: apply({ flexGrow: 1 }),
  },
  colors: Color,
  fonts: {
    robotoBlack: FontFamily.BLACK,
    robotoMedium: FontFamily.MEDIUM,
    robotoBold: FontFamily.BOLD,
    robotoRegular: FontFamily.REGULAR,
    robotoLight: FontFamily.LIGHT,
  },
  sizing: {
    middle: 0.5,
    minimum: 1,
    double: 2,
  },
})

const modalAnimation = {
  0: { transform: [{ translateY: 700 }] },
  1: { transform: [{ translateY: 0 }] },
  easing: Easing.bezier(0.17, 0.59, 0.4, 0.77),
}

export { C, boxShadow, classNames, extend, apply, theme, modalAnimation }
export default { C, boxShadow, classNames, extend, apply, theme }
