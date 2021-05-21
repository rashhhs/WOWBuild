import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { SafeAreaView, View, StatusBar, Platform, ScrollView, StyleSheet } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import RNModal from 'react-native-modal'

import { FancyModalProps } from '../FancyModal/FancyModal.types'

import AwesomeIcon, { AwesomeIconSize, AwesomeIconVariant } from 'src/components/AwesomeIcon/index'
import Text, { TextVariant, FontWeight } from 'src/components/Text/index'
import Color from 'src/utils/Colors'
import { C, apply } from 'src/utils/styles'
import type { VisibleToggle } from 'src/utils/types'

const FancyModal: ForwardRefRenderFunction<VisibleToggle, Partial<FancyModalProps>> = (
  {
    closable = true,
    title = '',
    hideTitle = false,
    backgroundColor = Color.white,
    hideScrollView = false,
    onOpen,
    onDoAfterOpen = () => {},
    onClose,
    children,
    isVisible = false,
    ...props
  },
  ref,
) => {
  const [visible, setVisible] = useState<boolean>(isVisible)
  const containerMaxHeight = { maxHeight: '100%' }
  const scrollViewHeight = { maxHeight: '90%' }
  const open = () => {
    onOpen?.()
    setVisible(true)
    onDoAfterOpen?.()
  }
  const close = () => {
    if (closable) {
      setVisible(false)
      onClose?.()
    }
  }

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  useEffect(() => {
    if (!closable && !visible) {
      setVisible(true)
    } else {
      setVisible(visible)
    }
  }, [closable, visible])

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true)
    }

    return () => {
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(false)
      }
    }
  }, [])

  /* Workaround for consistenccs 1.5: apply() is not working here with C.m0, even with {margin: 0} */
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
  })

  return (
    <RNModal
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={250}
      isVisible={visible}
      onBackdropPress={close}
      onBackButtonPress={close}
      style={styles.container}
      {...props}>
      <SafeAreaView
        style={apply(C.justifyCenter, {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          backgroundColor: backgroundColor,
        })}>
        <View style={containerMaxHeight}>
          {!hideTitle ? (
            <View style={apply(C.row, C.justifyBetween, C.itemsCenter, C.mt3, C.py3, C.px4, C.mb1)}>
              <Text variant={TextVariant.Large} weight={FontWeight.Regular} numberOfLines={1}>
                {title}
              </Text>

              {closable && (
                <AwesomeIcon
                  onPress={close}
                  containerStyle={C.ml2}
                  variant={AwesomeIconVariant.Regular}
                  icon="times"
                  size={AwesomeIconSize.Medium}
                  color={Color.support}
                />
              )}
            </View>
          ) : null}
          {hideScrollView ? children : <ScrollView style={scrollViewHeight}>{children}</ScrollView>}
          {/* The topSpacing in negative is applied to remove the extra white space the library detects from the title view outside the ScrollView.
        And showed above the keyboard meanwhile the user is typing  */}
          {Platform.OS === 'ios' && <KeyboardSpacer topSpacing={-30} />}
        </View>
      </SafeAreaView>
    </RNModal>
  )
}

export default forwardRef(FancyModal)
