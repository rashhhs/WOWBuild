import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import FastImage, { ImageStyle } from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useBuilds } from 'src/app/build/hooks/Builds'
import { SCREEN_BUILD_DETAIL } from 'src/app/core/navigation/ScreenNames'
import { navigate } from 'src/app/core/navigation/utils'
import AwesomeIcon, { AwesomeIconSize, AwesomeIconVariant } from 'src/components/AwesomeIcon'
import Layout from 'src/components/Layout'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import Color, { TextColor } from 'src/utils/Colors'
import { dateToString } from 'src/utils/dates'
import { apply, C } from 'src/utils/styles'
import translate from 'src/utils/translate'

const Builds = () => {
  const insets = useSafeAreaInsets()
  const builds = useBuilds()

  return (
    <Layout insets={insets} title={translate('builds.title')} withTabs testID={'build-list-layout'}>
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
              onPress={() => {
                navigate(SCREEN_BUILD_DETAIL, { id: item.id })
              }}
              testID={`build-list-item-${index}`}>
              <View style={apply(C.row, C.itemsCenter)}>
                <FastImage
                  style={apply(C.w6, C.h6, C.mr2) as ImageStyle}
                  source={{
                    uri: item.specImage,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <View>
                  <Text variant={TextVariant.XXS} color={TextColor.neutral}>
                    {dateToString(item.lastUpdate)}
                  </Text>
                  <Text variant={TextVariant.S} weight={FontWeight.Medium} numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
              </View>
              <View style={apply(C.row, C.itemsCenter)}>
                <FastImage
                  style={apply(C.w20, C.h10, C.mr4) as ImageStyle}
                  source={{
                    uri: item.expansionImage,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
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
