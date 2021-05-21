import type { ModalProps as RNModalProps } from 'react-native-modal'

import Color from 'src/utils/Colors'
import type { VisibleToggle, VoidFunction } from 'src/utils/types'

export type FancyModalProps = RNModalProps &
  VisibleToggle & {
    title: string
    hideTitle?: boolean
    backgroundColor: Color
    closable?: boolean
    hideScrollView?: boolean
    onOpen?: VoidFunction
    onDoAfterOpen?: VoidFunction
    onClose?: VoidFunction
  }
