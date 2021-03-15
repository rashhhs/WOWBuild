import C, {boxShadow, classNames, extend, apply, theme} from 'consistencss';
import Color from './Colors';

export enum FontFamily {
  BLACK = 'Roboto-Black',
  LIGHT = 'Roboto-Light',
  REGULAR = 'Roboto-Regular',
  MEDIUM = 'Roboto-Medium',
  BOLD = 'Roboto-Bold',
}

extend({
  classes: {
    letterzero: apply({letterSpacing: 0}),
    lettertwo: apply({letterSpacing: 0.2}),
    letterfour: apply({letterSpacing: 0.4}),
    grow: apply({flexGrow: 1}),
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
});

export {C, boxShadow, classNames, extend, apply, theme};
export default {C, boxShadow, classNames, extend, apply, theme};
