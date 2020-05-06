import { StyleSheet, ViewStyle } from 'react-native';

import { rem } from '../../utils';

export interface ForgotPasswordScreenStyle {
  container: ViewStyle;
  header: ViewStyle;
}

export const styles = StyleSheet.create<ForgotPasswordScreenStyle>({
  container: {
    flex: 1,
    paddingHorizontal: rem(24),
  },
  header: { marginVertical: 50 },
});
