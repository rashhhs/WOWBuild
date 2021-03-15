import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fal} from '@fortawesome/pro-light-svg-icons';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {far} from '@fortawesome/pro-regular-svg-icons';
import {fad} from '@fortawesome/pro-duotone-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import Color from '../../utils/Colors';

library.add(fal, fas, far, fad, fab);

import {AwesomeIconSize, AwesomeIconVariant} from './AwesomeIcon.types';
import type {AwesomeIconProps} from './AwesomeIcon.types';

const AwesomeIcon = ({
  color = Color.squidInk,
  icon,
  size = AwesomeIconSize.Medium,
  style,
  variant = AwesomeIconVariant.Regular,
  transform,
  testID,
}: AwesomeIconProps) => (
  <FontAwesomeIcon
    icon={[variant, icon]}
    color={color}
    size={size}
    style={style}
    transform={transform}
    {...testID}
  />
);

export default AwesomeIcon;
