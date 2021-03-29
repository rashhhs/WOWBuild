import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useTabs } from 'src/app/core/navigation/utils'
import Layout from 'src/components/Layout'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import { RootStackParamList } from 'src/utils/types'

const BuildFragment = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'BuildFragment'>>()
  const insets = useSafeAreaInsets()
  const { goBack } = useNavigation()
  const { hideTabs } = useTabs()

  hideTabs()

  const onBackPressed = () => {
    goBack()
  }

  return (
    <Layout title={params.title} withBack insets={insets} onBack={onBackPressed}>
      <ScrollView>
        <View>
          <Text variant={TextVariant.S} weight={FontWeight.Regular}>
            {'TEXT'}
          </Text>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default BuildFragment
