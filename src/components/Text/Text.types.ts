import type {TextProps as RNTextProps} from 'react-native';
import type {PropsWithTypedChildren, WithTestID} from '../../utils/types';
import type {TextColor} from '../../utils/Colors';

export enum TextVariant {
  Hero = 'Hero',
  XL = 'XL',
  ExtraLarge = 'XL',
  L = 'L',
  Large = 'L',
  M = 'M',
  Medium = 'M',
  S = 'S',
  Small = 'S',
  XS = 'XS',
  ExtraSmall = 'XS',
  XXS = 'XXS',
  ExtraExtraSmall = 'XXS',
}

export enum TextAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum OnboardingTextVariant {
  Hero = 'Hero',
  XL = 'XL',
  ExtraLarge = 'XL',
  L = 'L',
  Large = 'L',
}

export enum FontWeight {
  Black = 'Black',
  Light = 'Light',
  Regular = 'Regular',
  Medium = 'Medium',
  Bold = 'Bold',
}

type FontProps = WithTestID<{
  align?: TextAlign;
  color?: TextColor;
  uppercase?: boolean;
}>;

type BasicText = FontProps & {
  variant:
    | TextVariant.Hero
    | TextVariant.XL
    | TextVariant.ExtraLarge
    | TextVariant.Medium
    | TextVariant.XS
    | TextVariant.ExtraSmall
    | TextVariant.XXS
    | TextVariant.ExtraExtraSmall;
  weight?: FontWeight.Regular;
};

type ExtraLargeText = FontProps & {
  variant: TextVariant.ExtraLarge | TextVariant.XL;
  weight: FontWeight.Regular | FontWeight.Medium;
};

type LargeText = FontProps & {
  variant: TextVariant.Large | TextVariant.L;
  weight: FontWeight.Bold | FontWeight.Regular;
};

type SmallText = FontProps & {
  variant: TextVariant.Small | TextVariant.S;
  weight: FontWeight.Bold | FontWeight.Medium | FontWeight.Regular;
};

export type TextProps = PropsWithTypedChildren<
  | (RNTextProps & BasicText)
  | (RNTextProps & ExtraLargeText)
  | (RNTextProps & LargeText)
  | (RNTextProps & SmallText),
  string
>;

export type OnboardingTextProps = PropsWithTypedChildren<
  RNTextProps &
    FontProps & {
      variant: OnboardingTextVariant;
    },
  string
>;
