import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useCallback, useMemo, useRef, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import FastImage, { ImageStyle } from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useBuildActions, useBuildDetail } from 'src/app/build/hooks/Builds'
import { Runeforging } from 'src/app/core/config/classes/deathKnight/types'
import { DEFAULT_SPELL, SecondaryStat, Spell, Weapon } from 'src/app/core/config/types'
import { useSpells } from 'src/app/core/hooks/Spells'
import { SCREEN_BUILD_FRAGMENT } from 'src/app/core/navigation/ScreenNames'
import { navigate, useTabs } from 'src/app/core/navigation/utils'
import Tooltip from 'src/app/core/screens/Tooltip'
import AwesomeIcon from 'src/components/AwesomeIcon'
import { FancyModalProps } from 'src/components/FancyModal'
import FancyModal from 'src/components/FancyModal/FancyModal'
import Layout from 'src/components/Layout'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import Color, { TextColor } from 'src/utils/Colors'
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
  const tooltipsRef = useRef<FancyModalProps>(null)
  const [currentSpell, setCurrentSpell] = useState<Spell>(DEFAULT_SPELL)
  const spells = useSpells()
  const { fetchBuildDetail, clearBuildDetail } = useBuildActions()
  const buildDetail = useBuildDetail()
  const { showTabs } = useTabs()

  showTabs()

  const onBackPressed = () => {
    goBack()
  }

  const onSpellPressed = (spell: Spell) => {
    setCurrentSpell(spell)
    tooltipsRef.current?.open()
  }

  const secondaryValue = (secondaryStat: string | null) => {
    if (!secondaryStat) {
      return ''
    } else {
      let value = ''
      switch (secondaryStat) {
        case SecondaryStat.Critic:
          value = buildDetail?.secondaryStats.critic || ''
          break
        case SecondaryStat.Haste:
          value = buildDetail?.secondaryStats.haste || ''
          break
        case SecondaryStat.Mastery:
          value = buildDetail?.secondaryStats.mastery || ''
          break
        case SecondaryStat.Versatility:
          value = buildDetail?.secondaryStats.versatility || ''
          break
      }
      return stringIsEmpty(value) ? value : `${value} %`
    }
  }

  const hasSecondaryStatsExtraContent = useMemo(() => {
    return !!buildDetail?.secondaryStats.extra
  }, [buildDetail?.secondaryStats])

  const hasMechanicsExtraContent = useMemo(() => {
    return !!buildDetail?.mechanics.extra
  }, [buildDetail?.mechanics])

  const hasSkillsExtraContent = useMemo(() => {
    return !!buildDetail?.skills.extra
  }, [buildDetail?.skills])

  const fetch = useCallback(() => fetchBuildDetail?.(id), [fetchBuildDetail, id])

  useEffect(() => {
    fetch()
    return () => clearBuildDetail?.()
  }, [fetch, clearBuildDetail])

  const spellRow = (spell: Spell, index: number, fallback: string) =>
    spell ? (
      <TouchableOpacity
        key={index}
        onPress={() => onSpellPressed(spell)}
        style={apply(C.row, C.selfStart, C.py1)}>
        <FastImage
          style={apply(C.w5, C.h5, C.radius1, C.mr2) as ImageStyle}
          source={{
            uri: spell.image,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text variant={TextVariant.S} weight={FontWeight.Regular}>
          {spell.title}
        </Text>
      </TouchableOpacity>
    ) : (
      <Text variant={TextVariant.S} weight={FontWeight.Regular} style={C.my1} key={index}>
        {fallback}
      </Text>
    )

  return (
    <Layout
      title={buildDetail?.name}
      insets={insets}
      withTabs
      withBack
      onBack={onBackPressed}
      testID={'build-detail-layout'}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
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
        {/* Secondary Statistics */}
        <TouchableOpacity
          activeOpacity={hasSecondaryStatsExtraContent ? 0.4 : 1}
          disabled={!hasSecondaryStatsExtraContent}
          onPress={() =>
            navigate(SCREEN_BUILD_FRAGMENT, {
              title: translate('buildDetail.secondaries.orders'),
              contents: buildDetail?.secondaryStats.extra,
            })
          }
          testID={'build-detail-secondary-stats-widget'}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {translate('buildDetail.secondaries.orders')}
              </Text>
              {hasSecondaryStatsExtraContent ? (
                <AwesomeIcon
                  icon={'chevron-right'}
                  size={32}
                  testID={'build-detail-chevron-secondary-stats-widget'}
                />
              ) : null}
            </View>
            {(buildDetail?.secondaryStats.order ?? []).map((stat, index) => (
              <Text key={index} variant={TextVariant.S} weight={FontWeight.Regular}>
                {`${translate(`buildDetail.secondaries.${stat}`)} ${secondaryValue(stat)}`}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
        {/* Class Specifics */}
        <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
          <View style={apply(C.row, C.flex, C.justifyBetween)}>
            <Text variant={TextVariant.L} weight={FontWeight.Regular}>
              {translate('buildDetail.classSpecifics')}
            </Text>
          </View>
          {(buildDetail?.classSpecifics ?? []).map(s =>
            s.value.map((value: Weapon | Runeforging, index: number) => (
              <Text variant={TextVariant.S} weight={FontWeight.Regular} key={`${index}${value}`}>
                {`Specific ${s.type}${value}`}
              </Text>
            )),
          )}
        </View>
        {/* Mechanics */}
        <TouchableOpacity
          activeOpacity={hasSecondaryStatsExtraContent ? 0.4 : 1}
          disabled={!hasMechanicsExtraContent}
          onPress={() =>
            navigate(SCREEN_BUILD_FRAGMENT, {
              title: 'Mechanics',
              fragment: buildDetail?.mechanics.extra,
            })
          }
          testID={'build-detail-mechanics-widget'}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {translate('buildDetail.mechanics')}
              </Text>
              {hasMechanicsExtraContent ? (
                <AwesomeIcon
                  icon={'chevron-right'}
                  size={32}
                  testID={'build-detail-chevron-mechanics-widget'}
                />
              ) : null}
            </View>
            {(buildDetail?.mechanics.values ?? []).map((mechanic, index) => {
              // @ts-ignore
              const spell = spells[mechanic] as Spell
              return spellRow(spell, index, mechanic)
            })}
          </View>
        </TouchableOpacity>
        {/* Skills */}
        <TouchableOpacity
          activeOpacity={hasSecondaryStatsExtraContent ? 0.4 : 1}
          disabled={!hasSkillsExtraContent}
          onPress={() =>
            navigate(SCREEN_BUILD_FRAGMENT, {
              title: 'Skills',
              fragment: buildDetail?.skills.extra,
            })
          }
          testID={'build-detail-skills-widget'}>
          <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
            <View style={apply(C.row, C.flex, C.justifyBetween)}>
              <Text variant={TextVariant.L} weight={FontWeight.Regular}>
                {translate('buildDetail.skills')}
              </Text>
              {hasSkillsExtraContent ? <AwesomeIcon icon={'chevron-right'} size={32} /> : null}
            </View>
            {(buildDetail?.skills.values ?? []).map((skill, index) => {
              // @ts-ignore
              const spell = spells[skill] as Spell
              return spellRow(spell, index, skill)
            })}
          </View>
        </TouchableOpacity>
        {/* Talents */}
        <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
          <View style={apply(C.row, C.flex, C.justifyBetween)}>
            <Text variant={TextVariant.L} weight={FontWeight.Regular}>
              {translate('buildDetail.talents')}
            </Text>
          </View>
          {(buildDetail?.talents.values ?? []).map((talent, index) => {
            // @ts-ignore
            const spell = spells[talent] as Spell
            return spellRow(spell, index, talent)
          })}
          {(buildDetail?.talents.pvp ?? []).map((talent, index) => (
            <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
              {`PVP Talent: ${talent}`}
            </Text>
          ))}
        </View>
        {/* Covenant & Legendary */}
        <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
          <View style={apply(C.row, C.flex, C.justifyBetween)}>
            <Text variant={TextVariant.L} weight={FontWeight.Regular}>
              {translate('buildDetail.covenantLegendary')}
            </Text>
          </View>
          <Text variant={TextVariant.S} weight={FontWeight.Regular}>
            {`Utility Covenant: ${buildDetail?.covenantLegendary.covenant.utility}`}
          </Text>
          <Text variant={TextVariant.S} weight={FontWeight.Regular}>
            {`Class Covenant: ${buildDetail?.covenantLegendary.covenant.class}`}
          </Text>
          <Text variant={TextVariant.S} weight={FontWeight.Regular}>
            {`Legendary: ${buildDetail?.covenantLegendary.legendary}`}
          </Text>
        </View>
        {/* Soulbinds */}
        <View style={apply(C.flex, C.m2, C.p2, C.radius2, C.bgPlatin)}>
          <View style={apply(C.row, C.flex, C.justifyBetween)}>
            <Text variant={TextVariant.L} weight={FontWeight.Regular}>
              {`Soulbinds: ${buildDetail?.soulbinds.who}`}
            </Text>
          </View>
          {(buildDetail?.soulbinds.values ?? []).map((soulbind, index) => (
            <Text variant={TextVariant.S} weight={FontWeight.Regular} key={index}>
              {`Soulbind: ${soulbind}`}
            </Text>
          ))}
        </View>
      </ScrollView>
      <FancyModal ref={tooltipsRef} backgroundColor={Color.squidInk} hideTitle hideScrollView>
        <Tooltip spell={currentSpell} />
      </FancyModal>
    </Layout>
  )
}

export default BuildDetail
