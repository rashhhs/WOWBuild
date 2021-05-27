import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useEffect, useMemo, useRef } from 'react'
import {
  Animated,
  TouchableOpacityProps,
  View,
  TouchableOpacity,
  Easing,
  GestureResponderEvent,
} from 'react-native'

import { AwesomeIconSize, AwesomeIconVariant } from './AwesomeIcon.types'
import type { AwesomeIconProps } from './AwesomeIcon.types'

import Color from 'src/utils/Colors'
import { withAnchorPoint } from 'src/utils/animation'
import { apply } from 'src/utils/styles'

library.add(fal, fas, far, fad, fab)

const AwesomeIcon = ({
  color = Color.squidInk,
  containerStyle,
  icon,
  size = AwesomeIconSize.Medium,
  style,
  disabled = false,
  onPress,
  rotate,
  rotateDuration = 800,
  rotateOrientation,
  variant = AwesomeIconVariant.Regular,
  transform,
  testID,
}: AwesomeIconProps) => {
  const rotation = useRef(new Animated.Value(0)).current

  const handlePress = (event: GestureResponderEvent) => {
    if (!disabled) {
      onPress?.(event)
    }
  }

  const animation = useMemo(
    () =>
      Animated.loop(
        Animated.timing(rotation, {
          toValue: rotateOrientation === 'rtl' ? -1 : 1,
          duration: rotateDuration,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ),
    [rotateOrientation, rotateDuration, rotation],
  )

  const degreeValue = rotation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-360deg', '0deg', '360deg'],
  })

  const rotateTransform = withAnchorPoint(
    { transform: [{ rotate: (degreeValue as unknown) as string }] },
    { x: 0.5, y: 0.5 },
    { width: size, height: size },
  )

  let WrapperComponent = View
  const wrapperProps: TouchableOpacityProps = {}

  if (typeof onPress === 'function') {
    // @ts-ignore
    WrapperComponent = TouchableOpacity
    wrapperProps.onPress = handlePress
    wrapperProps.activeOpacity = !disabled ? 0.8 : 1
  }

  useEffect(() => {
    if (rotate) {
      animation.start()
    } else {
      animation.stop()
    }
  }, [animation, rotate])

  return (
    <Animated.View style={apply(containerStyle, rotateTransform)}>
      <WrapperComponent {...wrapperProps}>
        <FontAwesomeIcon
          icon={[variant, icon]}
          color={color}
          size={size}
          style={style}
          transform={transform}
          {...testID}
        />
      </WrapperComponent>
    </Animated.View>
  )
}

export default AwesomeIcon
