import type { IconName } from '@fortawesome/fontawesome-svg-core'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'

import NavigationService from './NavigationService'

import AwesomeIcon from 'src/components/AwesomeIcon'
import Text, { TextVariant } from 'src/components/Text'
import Color, { TextColor } from 'src/utils/Colors'
import { C } from 'src/utils/styles'

export const useTabs = () => {
  return {
    showTabs: useShowTabs,
    hideTabs: useHideTabs,
  }
}

export const useShowTabs = () => {
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.dangerouslyGetParent()
      parent?.setOptions({ tabBarVisible: true })
    }, [navigation]),
  )

  return null
}

export const useHideTabs = () => {
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.dangerouslyGetParent()
      parent?.setOptions({ tabBarVisible: false })
    }, [navigation]),
  )

  return null
}

export function navigate(screen: string, props?: any, action?: any) {
  NavigationService.navigate(screen, props, action)
}

export const tabBarItem = (icon: IconName, name: string) => ({
  options: {
    unmountOnBlur: true,
    gestureEnabled: false,
    tabBarLabel: ({ color }: { color: string; focused: boolean }) => (
      <Text
        color={(color as TextColor) ?? TextColor.disrupt}
        style={C.mt1}
        variant={TextVariant.ExtraExtraSmall}>
        {name}
      </Text>
    ),
    tabBarIcon: ({ color }: { color: string }) => (
      <AwesomeIcon icon={icon} size={16} color={color as Color} />
    ),
  },
})
