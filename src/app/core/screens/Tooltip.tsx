import React from 'react'
import { View } from 'react-native'
import FastImage, { ImageStyle } from 'react-native-fast-image'

import { Spell } from 'src/app/core/config/types'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import { TextColor } from 'src/utils/Colors'
import { apply, C } from 'src/utils/styles'

const Tooltip = ({ spell }: { spell: Spell }) => {
  return (
    <View style={apply(C.p2)}>
      <View style={apply(C.row, C.mb1)}>
        <FastImage
          style={apply(C.w15, C.h15) as ImageStyle}
          source={{
            uri: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostarmor.jpg',
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={apply(C.flex, C.ml2)}>
          <Text
            variant={TextVariant.M}
            weight={FontWeight.Bold}
            color={TextColor.white}
            numberOfLines={1}
            style={C.flex}>
            {spell.title}
          </Text>
          <View style={apply(C.row, C.justifyBetween)}>
            <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.neutral}>
              {spell?.type ?? ''}
            </Text>
            <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.neutral}>
              {spell?.type2 ?? ''}
            </Text>
          </View>
          <View style={apply(C.row, C.justifyBetween)}>
            <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
              {spell?.cost ?? ''}
            </Text>
            <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
              {spell?.yards ?? ''}
            </Text>
          </View>
        </View>
      </View>
      {spell?.charges || spell?.cooldown ? (
        <View style={apply(C.row, C.justifyBetween)}>
          <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
            {spell?.charges ?? ''}
          </Text>
          <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
            {spell?.cooldown ?? ''}
          </Text>
        </View>
      ) : null}
      {spell?.rclass ? (
        <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
          {spell.rclass}
        </Text>
      ) : null}
      {spell?.rlevel ? (
        <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
          {spell.rlevel}
        </Text>
      ) : null}
      <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.draft}>
        {spell.description}
      </Text>
      {spell?.extraInfo ? (
        <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
          {spell.extraInfo}
        </Text>
      ) : null}
    </View>
  )
}

export default Tooltip
