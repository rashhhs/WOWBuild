import React, { ReactNode } from 'react'
import { View } from 'react-native'
import FastImage, { ImageStyle } from 'react-native-fast-image'

import { Spell, SpellExtraInfo } from 'src/app/core/config/types'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import { TextColor } from 'src/utils/Colors'
import { apply, C } from 'src/utils/styles'

const Tooltip = ({ spell }: { spell: Spell }) => {
  const extraInfo = (info: SpellExtraInfo): ReactNode =>
    info?.image && info?.title ? (
      <>
        <View style={apply(C.row, C.itemsCenter, C.mt2, C.mb1)}>
          <FastImage
            style={apply(C.w5, C.h5, C.radius1, C.mr2) as ImageStyle}
            source={{
              uri: info.image,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
            {info.title}
          </Text>
        </View>
        <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.draft}>
          {info.description}
        </Text>
      </>
    ) : (
      <Text
        variant={TextVariant.S}
        weight={FontWeight.Regular}
        color={TextColor.white}
        style={C.mt2}>
        {info.description}
      </Text>
    )

  return (
    <View style={apply(C.p2)}>
      <View style={apply(C.row, C.mb1)}>
        <FastImage
          style={apply(C.w18, C.h18, C.radius2) as ImageStyle}
          source={{
            uri: spell.image,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={apply(C.flex, C.ml2)}>
          <Text
            variant={TextVariant.M}
            weight={FontWeight.Bold}
            color={TextColor.white}
            numberOfLines={1}
            style={apply(C.flex, C.itemsCenter)}>
            {spell.title}
          </Text>
          <View style={apply(C.flex, C.row, C.itemsCenter, C.justifyBetween)}>
            <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.neutral}>
              {spell?.type ?? ''}
            </Text>
            <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.neutral}>
              {spell?.type2 ?? ''}
            </Text>
          </View>
          <View style={apply(C.flex, C.row, C.itemsCenter, C.justifyBetween)}>
            <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
              {spell?.cost ?? ''}
            </Text>
          </View>
        </View>
      </View>
      {spell?.cast || spell?.yards ? (
        <View style={apply(C.row, C.justifyBetween)}>
          <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
            {spell?.cast ?? ''}
          </Text>
          <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
            {spell?.yards ?? ''}
          </Text>
        </View>
      ) : null}
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
      {spell?.extraInfo ? extraInfo(spell.extraInfo) : null}
    </View>
  )
}

export default Tooltip
