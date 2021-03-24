import React from 'react'

import Text, { TextVariant } from '../../../components/Text'
import { TextColor } from '../../../utils/Colors'
import { C } from '../../../utils/styles'

//TODO (R): Add TabBarIcon
export const tabBarItem = (Icon: any, name: string) => ({
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
  },
})
