import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { SCREEN_BUILD_FRAGMENT } from 'src/app/core/navigation/ScreenNames'
import { navigate, useTabs } from 'src/app/core/navigation/utils'
import AwesomeIcon from 'src/components/AwesomeIcon'
import Layout from 'src/components/Layout'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import { TextColor } from 'src/utils/Colors'
import { apply, C } from 'src/utils/styles'

const BuildDetail = () => {
  const insets = useSafeAreaInsets()
  const { goBack } = useNavigation()

  const { showTabs } = useTabs()

  const onBackPressed = () => {
    goBack()
  }

  showTabs()
  return (
    <Layout title={'Name Build'} insets={insets} withTabs withBack onBack={onBackPressed}>
      <ScrollView bounces={false}>
        {/* General Information */}
        <View style={apply(C.flex, C.m2, C.p2, C.bgSquidInk, C.radius2)}>
          <View style={apply(C.row)}>
            <View style={C.flex2}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular} color={TextColor.white}>
                {'Character Name'}
              </Text>
              <View style={apply(C.row, C.mt1)}>
                <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
                  {`Secondaries order: `}
                </Text>
                <View style={C.itemsEnd}>
                  <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
                    {'Critic (%)'}
                  </Text>
                  <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
                    {'Haste'}
                  </Text>
                  <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
                    {'Mastery (%)'}
                  </Text>
                  <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
                    {'Versatility'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={apply(C.flex, C.itemsEnd)}>
              <Text
                variant={TextVariant.S}
                weight={FontWeight.Regular}
                color={TextColor.white}
                style={C.mb2}>
                {'Race'}
              </Text>
              <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
                {'Reign'}
              </Text>
            </View>
          </View>
        </View>
        {/* Class Specifics */}
        <TouchableOpacity
          onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Class specifics' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {'Class specifics'}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {[1, 2, 3].map(index => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Specific ${index}`}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
        {/* Mechanics */}
        <TouchableOpacity onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Mechanics' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {'Mechanics'}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {[1, 2, 3, 4, 5, 6].map(index => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Mechanic ${index}`}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
        {/* Skills */}
        <TouchableOpacity onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Skills' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {'Skills'}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {[1, 2, 3, 4, 5, 6].map(index => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Skills ${index}`}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
        {/* Talents */}
        <TouchableOpacity onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Talents' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {'Talents'}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {[1, 2, 3, 4, 5, 6, 7].map(index => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Talent ${index}`}
              </Text>
            ))}
            {[1, 2, 3].map(index => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`PVP Talent ${index}`}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
        {/* Covenant & Legendary */}
        <TouchableOpacity
          onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Covenant & Legendary' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {'Covenant & Legendary'}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {[1, 2].map(index => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Covenant ${index}`}
              </Text>
            ))}
            <Text variant={TextVariant.S} weight={FontWeight.Regular}>
              {'Legendary'}
            </Text>
          </View>
        </TouchableOpacity>
        {/* Soulbinds */}
        <TouchableOpacity onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Soulbinds' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {`Soulbinds: (who)`}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {[1, 2].map(index => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Soulbind ${index}`}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  )
}

export default BuildDetail
