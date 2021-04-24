import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text as RNText, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useTabs } from 'src/app/core/navigation/utils'
import Layout from 'src/components/Layout'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import { apply, C } from 'src/utils/styles'
import { RootStackParamList } from 'src/utils/types'

const BuildFragment = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'BuildFragment'>>()
  const { fragment, contents } = params
  const insets = useSafeAreaInsets()
  const { goBack } = useNavigation()
  const { hideTabs } = useTabs()

  hideTabs()

  const onBackPressed = () => {
    goBack()
  }

  return (
    <Layout
      title={params.title}
      withBack
      insets={insets}
      onBack={onBackPressed}
      testID={'build-fragment-layout'}>
      <ScrollView>
        {(contents ?? []).map((content, index) => (
          <View style={C.m2}>
            <View style={C.mb4} key={index}>
              <Text
                variant={TextVariant.Medium}
                weight={FontWeight.Bold}
                style={apply(C.flex, C.mb2, { textDecorationLine: 'underline' })}>
                {`${content.title}: `}
              </Text>
              <Text variant={TextVariant.S} weight={FontWeight.Regular} style={C.flex}>
                {content.content}
              </Text>
            </View>
          </View>
        ))}
        {fragment ? (
          <View style={C.m2}>
            {fragment.key ? (
              <View style={C.mb4}>
                <Text
                  variant={TextVariant.Medium}
                  weight={FontWeight.Bold}
                  style={apply(C.flex, C.mb2, { textDecorationLine: 'underline' })}>
                  {`${fragment.key?.title}: `}
                </Text>
                <Text variant={TextVariant.S} weight={FontWeight.Regular} style={C.flex}>
                  {fragment.key?.content}
                </Text>
              </View>
            ) : null}
            {(fragment.others ?? []).map((otherContent, index) => (
              <View key={index} style={C.mb4}>
                {otherContent.subtitle ? (
                  <Text
                    variant={TextVariant.M}
                    weight={FontWeight.Bold}
                    style={apply(C.flex, C.mb2)}>
                    {otherContent.subtitle}
                  </Text>
                ) : null}
                {(otherContent.content ?? []).map((content, innerIndex) => (
                  <RNText key={innerIndex}>
                    <Text variant={TextVariant.S} weight={FontWeight.Regular} style={C.flex}>
                      {`${innerIndex + 1} - `}
                    </Text>
                    <Text
                      variant={TextVariant.S}
                      weight={FontWeight.Regular}
                      style={apply(C.flex, { textDecorationLine: 'underline' })}>
                      {`${content.title}: `}
                    </Text>
                    <Text variant={TextVariant.S} weight={FontWeight.Regular} style={C.flex}>
                      {content.content}
                    </Text>
                  </RNText>
                ))}
              </View>
            ))}
          </View>
        ) : null}
      </ScrollView>
    </Layout>
  )
}

export default BuildFragment
