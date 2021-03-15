import type {IconName, Transform} from '@fortawesome/fontawesome-svg-core';
import type Color from '../../utils/Colors';
import type {ViewStyle} from 'react-native';
import type {WithTestID} from '../../utils/types';

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
  variant?: AwesomeIconVariant;
  icon: IconName;
  color?: Color;
  size?: AwesomeIconSize;
  style?: ViewStyle;
  transform?: Transform;
}>;

export type {IconName, Transform};
