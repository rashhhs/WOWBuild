import React, { useEffect } from 'react'
import { Platform, StatusBar, TouchableOpacity, View, ViewStyle } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { SafeAreaView } from 'react-native-safe-area-context'

import type { LayoutProps } from './Layout.types'

import AwesomeIcon, { AwesomeIconSize, AwesomeIconVariant } from 'src/components/AwesomeIcon'
import Text, { FontWeight, TextVariant } from 'src/components/Text'
import Color from 'src/utils/Colors'
import { apply, C, classNames } from 'src/utils/styles'

const Layout = ({
  actions,
  children,
  hideHeader = false,
  hideKeyboardSpacer = false, //In ContactList -> IOS the keyboardSpacer is not working correctly, workaround just to remove the keyboardSpacer for this situation
  onBack,
  insets,
  lightBar = false,
  statusBarColor = Color.backdrop,
  title = '',
  withBack = false,
  withTabs = false,
  testID,
}: LayoutProps) => {
  useEffect(() => {
    StatusBar.setBarStyle(lightBar ? 'light-content' : 'dark-content')

    if (Platform.OS !== 'ios') {
      StatusBar.setHidden(false)
      StatusBar.setBackgroundColor(statusBarColor)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusBarColor])

  return (
    <>
      <SafeAreaView
        style={apply(C.bgBackdrop, C.flex, withTabs ? { paddingBottom: -insets.bottom } : {})}
        {...testID}>
        {!hideHeader ? (
          <View
            style={classNames('h16 py4 row pr4 itemsCenter', {
              pl4: !withBack,
            })}>
            {withBack && (
              <TouchableOpacity
                style={apply(C.w8, C.h16, C.justifyCenter, C.w12, C.pl4)}
                onPress={onBack}
                activeOpacity={0.8}>
                <AwesomeIcon
                  icon="chevron-left"
                  variant={AwesomeIconVariant.Regular}
                  color={Color.action}
                  size={AwesomeIconSize.ExtraSmall}
                  style={apply(C.p2, C.mr2) as ViewStyle}
                />
              </TouchableOpacity>
            )}
            {typeof title === 'string' ? (
              <Text
                numberOfLines={1}
                variant={TextVariant.ExtraLarge}
                weight={FontWeight.Medium}
                style={apply(C.mr1, C.flex)}>
                {title}
              </Text>
            ) : (
              title
            )}
            {actions ? (
              <View style={apply(C.ml1, C.row, C.justifyEnd, C.itemsCenter)}>{actions}</View>
            ) : null}
          </View>
        ) : null}
        {children}
      </SafeAreaView>
      {!hideKeyboardSpacer && Platform.OS === 'ios' && <KeyboardSpacer topSpacing={0} />}
    </>
  )
}

export default Layout
