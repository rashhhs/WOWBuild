import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useBuilds } from 'src/app/build/hooks/Builds'
import { SCREEN_BUILD_DETAIL } from 'src/app/core/navigation/ScreenNames'
import { navigate } from 'src/app/core/navigation/utils'
import AwesomeIcon, { AwesomeIconSize, AwesomeIconVariant } from 'src/components/AwesomeIcon'
import Layout from 'src/components/Layout'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import Color, { TextColor } from 'src/utils/Colors'
import { apply, C } from 'src/utils/styles'

const Builds = () => {
  const insets = useSafeAreaInsets()
  const builds = useBuilds()

  return (
    <Layout insets={insets} title={'Builds'} withTabs>
      <FlatList
        data={builds}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              ref={index as any}
              style={apply(
                C.row,
                C.justifyBetween,
                C.itemsCenter,
                C.bgWhite,
                C.py2,
                C.px4,
                C.mbDouble,
              )}
              onPress={() => navigate(SCREEN_BUILD_DETAIL)}>
              <View>
                <Text variant={TextVariant.XXS} color={TextColor.neutral}>
                  {item.lastUpdate.toString()}
                </Text>
                <Text variant={TextVariant.S} weight={FontWeight.Medium} numberOfLines={1}>
                  {item.name}
                </Text>
              </View>
              <View style={apply(C.row, C.itemsCenter)}>
                <Text variant={TextVariant.S} weight={FontWeight.Regular} style={C.mr4}>
                  {item.expansion}
                </Text>
                <AwesomeIcon
                  variant={AwesomeIconVariant.Solid}
                  icon={'chevron-right'}
                  color={Color.action}
                  size={AwesomeIconSize.ExtraSmall}
                />
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </Layout>
  )
}

export default Builds
