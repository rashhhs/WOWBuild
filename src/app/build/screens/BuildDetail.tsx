import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useCallback } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useBuildActions, useBuildDetail } from 'src/app/build/hooks/Builds'
import { Runeforging } from 'src/app/core/config/classes/deathKnight/types'
import { SecondaryStat, Weapon } from 'src/app/core/config/types'
import { SCREEN_BUILD_FRAGMENT } from 'src/app/core/navigation/ScreenNames'
import { navigate, useTabs } from 'src/app/core/navigation/utils'
import AwesomeIcon from 'src/components/AwesomeIcon'
import Layout from 'src/components/Layout'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import { TextColor } from 'src/utils/Colors'
import { stringIsEmpty } from 'src/utils/strings'
import { apply, C, classNames } from 'src/utils/styles'
import translate from 'src/utils/translate'
import { RootStackParamList } from 'src/utils/types'

//TODO (R): Translate the values
const BuildDetail = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'BuildDetail'>>()
  const { id } = params
  const insets = useSafeAreaInsets()
  const { goBack } = useNavigation()
  const { fetchBuildDetail, clearBuildDetail } = useBuildActions()
  const buildDetail = useBuildDetail()
  const { showTabs } = useTabs()

  const onBackPressed = () => {
    goBack()
  }

  showTabs()

  const secondaryValue = (secondaryStat: string | null) => {
    if (!secondaryStat) {
      return ''
    } else {
      let value = ''
      switch (secondaryStat) {
        case SecondaryStat.Critic:
          value = buildDetail?.profile.secondaryStats.critic || ''
          break
        case SecondaryStat.Haste:
          value = buildDetail?.profile.secondaryStats.haste || ''
          break
        case SecondaryStat.Mastery:
          value = buildDetail?.profile.secondaryStats.mastery || ''
          break
        case SecondaryStat.Versatility:
          value = buildDetail?.profile.secondaryStats.versatility || ''
          break
      }
      return stringIsEmpty(value) ? value : `${value} %`
    }
  }

  const fetch = useCallback(() => fetchBuildDetail?.(id), [fetchBuildDetail, id])

  useEffect(() => {
    fetch()
    return () => clearBuildDetail?.()
  }, [fetch, clearBuildDetail])

  return (
    <Layout title={buildDetail?.name} insets={insets} withTabs withBack onBack={onBackPressed}>
      <ScrollView bounces={false}>
        {/* General Information */}
        <View style={apply(C.flex, C.m2, C.p2, C.bgSquidInk, C.radius2)}>
          <View style={apply(C.row)}>
            <View style={C.flex2}>
              <Text
                variant={TextVariant.L}
                weight={FontWeight.Regular}
                color={TextColor.white}
                style={classNames({
                  italic: !!buildDetail?.profile?.name,
                })}>
                {buildDetail?.profile?.name ?? translate('buildDetail.characterName')}
              </Text>
              <View style={apply(C.row, C.mt1)}>
                <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
                  {translate('buildDetail.secondaries.orders')}
                </Text>
                <View style={C.itemsEnd}>
                  {(buildDetail?.profile.secondaryStats.order ?? []).map(stat => (
                    <Text
                      variant={TextVariant.S}
                      weight={FontWeight.Regular}
                      color={TextColor.white}>
                      {`${translate(`buildDetail.secondaries.${stat}`)} ${secondaryValue(stat)}`}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
            <View style={apply(C.flex, C.itemsEnd)}>
              <Text
                variant={TextVariant.S}
                weight={FontWeight.Regular}
                color={TextColor.white}
                style={C.mb2}>
                {buildDetail?.profile?.race ?? 'Race'}
              </Text>
              <Text variant={TextVariant.S} weight={FontWeight.Regular} color={TextColor.white}>
                {buildDetail?.profile?.reign ?? 'Reign'}
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
                {translate('buildDetail.classSpecifics')}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {(buildDetail?.classSpecifics ?? []).map((s, index) =>
              s.value.map((value: Weapon | Runeforging) => (
                <Text variant={TextVariant.S} weight={FontWeight.Regular} key={`${index}${value}`}>
                  {`Specific ${s.type}${value}`}
                </Text>
              )),
            )}
          </View>
        </TouchableOpacity>
        {/* Mechanics */}
        <TouchableOpacity onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Mechanics' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {translate('buildDetail.mechanics')}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {(buildDetail?.mechanics.values ?? []).map((mechanic, index) => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Mechanic: ${mechanic}`}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
        {/* Skills */}
        <TouchableOpacity onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Skills' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {translate('buildDetail.skills')}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {(buildDetail?.skills.values ?? []).map((skill, index) => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Skill: ${skill}`}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
        {/* Talents */}
        <TouchableOpacity onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Talents' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {translate('buildDetail.talents')}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {(buildDetail?.talents.values ?? []).map((talent, index) => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Talent: ${talent}`}
              </Text>
            ))}
            {(buildDetail?.talents.pvp ?? []).map((talent, index) => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`PVP Talent: ${talent}`}
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
                {translate('buildDetail.covenantLegendary')}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            <Text variant={TextVariant.S} weight={FontWeight.Regular}>
              {`Utility Covenant ${buildDetail?.covenantLegendary.covenant.utility}`}
            </Text>
            <Text variant={TextVariant.S} weight={FontWeight.Regular}>
              {`Class Covenant ${buildDetail?.covenantLegendary.covenant.class}`}
            </Text>
            <Text variant={TextVariant.S} weight={FontWeight.Regular}>
              {`Legendary ${buildDetail?.covenantLegendary.legendary}`}
            </Text>
          </View>
        </TouchableOpacity>
        {/* Soulbinds */}
        <TouchableOpacity onPress={() => navigate(SCREEN_BUILD_FRAGMENT, { title: 'Soulbinds' })}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {`Soulbinds: ${buildDetail?.soulbinds.who}`}
              </Text>
              <AwesomeIcon icon={'chevron-right'} size={32} />
            </View>
            {(buildDetail?.soulbinds.values ?? []).map((soulbind, index) => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
                {`Soulbind ${soulbind}`}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  )
}

export default BuildDetail
