import type {VoidFunction, WithTestID} from '../../utils/types';
import type Color from '../../utils/Colors';
import type {PropsWithChildren, ReactNode} from 'react';

export type LayoutProps = WithTestID<
  PropsWithChildren<{
    actions?: ReactNode;
    hideHeader?: boolean;
    hideKeyboardSpacer?: boolean;
    lightBar?: boolean;
    insets: {bottom: number; top: number};
    onBack?: VoidFunction;
    statusBarColor?: Color;
    title: string | ReactNode;
    withBack?: boolean;
    withTabs?: boolean;
  }>
>;
