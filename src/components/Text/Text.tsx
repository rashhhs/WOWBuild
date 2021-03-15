import React from 'react';
import {apply, classNames} from '../../utils/styles';
import {Text as RNText} from 'react-native';
import {
  FontWeight,
  OnboardingTextProps,
  OnboardingTextVariant,
  TextAlign,
  TextProps,
  TextVariant,
} from './Text.types';
import {TextColor} from '../../utils/Colors';

const Text = ({
  align,
  children,
  color = TextColor.squidInk,
  style,
  variant,
  weight = FontWeight.Regular,
  ...props
}: TextProps) => (
  <RNText
    {...props}
    style={apply(
      style,
      classNames('', {
        'familyRobotoMedium font8 line9 letterfour':
          variant === TextVariant.Hero,
        'familyRobotoMedium line8 lettertwo':
          variant === TextVariant.ExtraLarge,
        'familyRobotoBold font6 line8 letterzero':
          variant === TextVariant.Large && weight === FontWeight.Bold,
        'familyRobotoRegular font6 line8 letterzero':
          variant === TextVariant.Large && weight === FontWeight.Regular,
        'familyRobotoBold font5 letterzero':
          variant === TextVariant.Medium && weight === FontWeight.Bold,
        'familyRobotoRegular font5 letterzero':
          variant === TextVariant.Medium && weight === FontWeight.Regular,
        'familyRobotoBold line5 lettertwo':
          variant === TextVariant.Small && weight === FontWeight.Bold,
        'familyRobotoMedium line5 lettertwo':
          variant === TextVariant.Small && weight === FontWeight.Medium,
        'familyRobotoRegular line5 letterzero':
          variant === TextVariant.Small && weight === FontWeight.Regular,
        'familyRobotoMedium letterzero':
          variant === TextVariant.ExtraSmall && weight === FontWeight.Medium,
        'familyRobotoRegular font3 letterzero':
          variant === TextVariant.ExtraExtraSmall,
        'familyRobotoMedium font3 letterzero':
          variant === TextVariant.ExtraExtraSmall &&
          weight === FontWeight.Medium,
        'familyRobotoBold font3 letterzero':
          variant === TextVariant.ExtraExtraSmall && weight === FontWeight.Bold,
        alignLeft: align === TextAlign.Left,
        alignCenter: align === TextAlign.Center,
        alignRight: align === TextAlign.Right,
      }),
      {color},
      variant === TextVariant.ExtraLarge ? {fontSize: 26} : {},
      variant === TextVariant.Medium ? {lineHeight: 26} : {},
      variant === TextVariant.ExtraSmall ? {fontSize: 14, lineHeight: 18} : {},
    )}>
    {`${children}`}
  </RNText>
);

export const OnboardingText = ({
  children,
  color = TextColor.squidInk,
  variant,
  style,
  ...props
}: OnboardingTextProps) => (
  <RNText
    {...props}
    style={apply(
      style,
      classNames('letterfour', {
        'familyRobotoBold font9 line11': variant === OnboardingTextVariant.Hero,
        'familyRobotoRegular font7 line9':
          variant === OnboardingTextVariant.ExtraLarge,
        'familyRobotoRegular line7': variant === OnboardingTextVariant.Large,
      }),
      {color},
      variant === OnboardingTextVariant.Large ? {fontSize: 21} : {},
    )}>
    {`${children}`}
  </RNText>
);

export default Text;
